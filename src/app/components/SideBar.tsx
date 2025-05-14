import { LayoutDashboard, PackageSearch, UserCheck, Users,} from "lucide-react"
import Link from "next/link"

export default function SideBar() {
    const link = [
        {
            name: "Dashbord",
            link: "/admin/dashboard",
            icon: <LayoutDashboard />
        },
        {
            name: "Partners",
            link: "/admin/partners",
            icon: <Users />
        },
        {
            name: "Orders",
            link: "/admin/orders",
            icon: <PackageSearch />
        },
        {
            name: "Assignments",
            link: "/admin/assignments",
            icon: <UserCheck />
        },
    ]
    return (
        <section className="w-[200px] border-r h-screen pt-10">
           <ul className="w-full flex flex-col gap-6">
            {
                link.map((items)=>(
                    <Link href={items.link} key={items.name}>
                    <li className="flex gap-3 items-center font-bold px-4 py-2 hover:bg-blue-300 transition-all duration-200">
                       <span className="text-5xl">{items.icon}</span>
                        <span>{items.name}</span>
                    </li>
                    </Link>
                ))
            }
           </ul>
        </section>
    )
}