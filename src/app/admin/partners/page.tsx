import Link from "next/link";
import { PlusIcon } from "lucide-react";
import PartnerList from "./PartnerList";

export default function Partner() {
    return (
         <>
        <main className="w-full p-6 flex flex-col gap-6 ">
            <div className="flex justify-between items-center ">
                <h1 className="text-2xl font-bold">Partners List</h1>
                <Link href="/admin/partners/form">
                <button className="flex gap-2 items-center  px-4 py-2 hover:bg-blue-300 border rounded-full">
                    <PlusIcon />
                    Add
                </button>
                </Link>
            </div>
          <PartnerList></PartnerList>
        </main>
         </>
    )
}