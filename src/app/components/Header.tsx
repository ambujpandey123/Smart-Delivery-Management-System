import { Home, List, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <nav className="flex justify-between items-center px-7 py-3 border-b ">
            <Link href="/admin/dashboard">
                <h1 title="Smart Delivery Management System" className="text-3xl font-bold bg-gradient-to-t from-green-500 via-red-500 to-blue-500 text-transparent bg-clip-text">SDMS</h1>
            </Link>
            <ul className="flex gap-6 items-center">
                <Link href={"/admin/dashboard"}>
                <li className="flex items-center gap-2">
                    <Home />
                    Home
                </li>
                </Link>
                <Link href={"#about"}>
                <li className="flex items-center gap-2">
                    <List />
                   About
                </li>
                </Link>
                <Link href={"#contactUs"}>
                <li className="flex items-center gap-2">
                    <MessageCircle />
                    Contact Us
                </li>
                </Link>
            </ul>
            
        </nav>
    )
}