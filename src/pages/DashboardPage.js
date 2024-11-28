import React from 'react';
function Dashboard() {
    const [gridData, setGridData] = React.useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
    ]);

    return (
        <div className="p-6">
            <h1 className="text-3xl mb-4">Dashboard</h1>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Make</th>
                            <th className="border p-2">Model</th>
                            <th className="border p-2">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gridData.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border p-2">{row.make}</td>
                                <td className="border p-2">{row.model}</td>
                                <td className="border p-2">${row.price.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Dashboard;