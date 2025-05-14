export default function PartnerList() {
    
    return (
        <section>
            <table className="w-full rounded-xl">
                <thead className="light-orange">
                    <tr>
                        <th className="border border-black px-4 py-2">Sr.</th>
                        <th className="border border-black px-4 py-2">Name</th>
                        <th className="border border-black px-4 py-2">Email</th>
                        <th className="border border-black px-4 py-2">Status</th>
                        <th className="border border-black px-4 py-2">Shift</th>
                        <th className="border border-black px-4 py-2">Area</th>
                        <th className="border border-black px-4 py-2">Metrics</th>
                        <th className="border border-black px-4 py-2">Edit</th>
                        <th className="border border-black px-4 py-2">Delete</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    
                        <tr>
                            <td className="border border-black px-4 py-2">1</td>
                            <td className=" border border-black px-4 py-2"> Name</td>
                            <td className="border border-black px-4 py-2">Email</td>
                            <td className="border border-black px-4 py-2">Status</td>
                            <td className="border border-black px-4 py-2">Shift</td>
                            <td className="border border-black px-4 py-2">Area</td>
                            <td className="border border-black px-4 py-2">Metrics</td>
                            <td className="border border-black px-4 py-2">Edit</td>
                            <td className="border border-black px-4 py-2">{/* <AuthorDeleteButton id={item._id}/> */}Delete</td>
                        </tr>
                        <tr>
                            <td className="border border-black px-4 py-2">2</td>
                            <td className=" border border-black px-4 py-2"> Name</td>
                            <td className="border border-black px-4 py-2">Email</td>
                            <td className="border border-black px-4 py-2">Status</td>
                            <td className="border border-black px-4 py-2">Shift</td>
                            <td className="border border-black px-4 py-2">Area</td>
                            <td className="border border-black px-4 py-2">Metrics</td>
                            <td className="border border-black px-4 py-2">Edit</td>
                            <td className="border border-black px-4 py-2">{/* <AuthorDeleteButton id={item._id}/> */}Delete</td>
                </tr>

                </tbody>
            </table>
        </section>
    )
}