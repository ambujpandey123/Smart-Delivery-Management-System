import userschema from "@/models/userschema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function GET(req: Request, res: Response): Promise<NextResponse> {
    return NextResponse.json({ message: "Hello from signup" });
}

export async function POST(req: Request, res: Response): Promise<NextResponse> {
    const getdata = await req.json();
    if (!getdata.name || !getdata.email || !getdata.password) {
        return NextResponse.json({ success: false, message: "User Details Are Not Reached to Server" })
    }
    const newUser = {
        name: getdata.name ?? "User",
        email: getdata.email ?? "user@gmail.com",
        password: getdata.password ?? "password",
        isLoggedIn: true,
    };

    try {
        newUser.password = await bcrypt.hashSync(newUser.password, 10);
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI as string);

        const AlreadyRegistred = await userschema.findOne({ email: newUser.email })

        if (AlreadyRegistred) {
            return NextResponse.json({ success: false, message: "Email Already registerd" })
        }

        const user = new userschema(newUser);
        await user.save();
        // console.log("User created successfully", user);
        const auth_token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.NEXT_PUBLIC_JWT_TOKEN as string,
            { expiresIn: '1d' }
        )
        const TrueResponse = NextResponse.json({ success: true, message: "User created successfully" })

        if (getdata.rememberMe) {
            TrueResponse.cookies.set({
                name: "AuthToken",
                value: auth_token,
                secure: true,
                httpOnly: true,
                maxAge: 24 * 60 * 60, // 1 day in seconds
                path: "/"
            })
        }

        return TrueResponse;
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({success:false, message: "Internal server error", error: (error as Error).message});
    } finally {
        await mongoose.connection.close();
    }
}
