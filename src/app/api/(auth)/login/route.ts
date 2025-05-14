import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import  jwt from  'jsonwebtoken';
import userschema from "@/models/userschema";

export async function GET(req: Request, res: Response): Promise<NextResponse> {
    return NextResponse.json({ message: "Hello from signup" });
}

export async function POST(req: Request, res: Response): Promise<NextResponse> {
    const getdata = await req.json();
    if ( !getdata.email || !getdata.password) {
        return NextResponse.json({success:false, message: "User Details Are Not Reaced At Server" })
    }
    try {
        
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI as string);

        const user =await userschema.findOne({email:getdata.email})
        if(!user){
            return NextResponse.json({success:false, message: "Email Not Registerd" })
        }
        const camparePassword = await bcrypt.compare(getdata.password, user.password);
        if(!camparePassword){
            return NextResponse.json({success:false, message: "Wrong Password" })
        }
        await userschema.updateOne({email:getdata.email},{$set:{isLoggedIn:true}})

        const auth_token = jwt.sign(
            {userId:user._id,email:user.email},
            process.env.NEXT_PUBLIC_JWT_TOKEN as string,
            {expiresIn:'1d'}
        )
        const TrueResponse = NextResponse.json({success:true, message: "Login successfully" })
        if (getdata.rememberMe) { 
            TrueResponse.cookies.set({
            name:"AuthToken",
            value:auth_token,
            secure:true,
            httpOnly:true,
            maxAge: 24 * 60 * 60, // 1 day in seconds
            path:"/"
        })}

    
        return TrueResponse;
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({success:false, message: "Internal server error", error: (error as Error).message});
    } finally {
        await mongoose.connection.close();
    }
}