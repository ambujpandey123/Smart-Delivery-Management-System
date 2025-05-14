import SideBar from "../components/SideBar";

export default function AdminLayout({children}: {children: React.ReactNode}){
    return (
        <div>
            <section className="flex">
                <SideBar />
                {children}
            </section>
        </div>
    )

}