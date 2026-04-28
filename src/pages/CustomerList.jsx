import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Topbar from '../components/Topbar.jsx'

const customers = [
  ['01', 'Name', 'Phone', 'Address', 'Ordered no', 'Status', '2026-04-10', '2026-04-20', 'Admin'],
  ['02', 'Name', 'Phone', 'Address', 'Ordered no', 'Status', '2026-04-11', '2026-04-21', 'Admin'],
  ['03', 'Name', 'Phone', 'Address', 'Ordered no', 'Status', '2026-04-12', '2026-04-22', 'Admin'],
  ['04', 'Name', 'Phone', 'Address', 'Ordered no', 'Status', '2026-04-13', '2026-04-23', 'Admin'],
  ['05', 'Name', 'Phone', 'Address', 'Ordered no', 'Status', '2026-04-14', '2026-04-24', 'Admin'],
  ['06', 'Name', 'Phone', 'Address', 'Ordered no', 'Status', '2026-04-15', '2026-04-25', 'Admin'],
]

function CustomerList() {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-screen bg-[#fffdf8] text-[#6b2a1f]">
      <Navbar />

      <section className="flex min-h-screen flex-1 flex-col px-5 py-4 sm:px-6">
        <Topbar />

        <div className="mt-1 flex items-center justify-between">
          <h1 className="text-[18px] font-medium text-[#19110f]">Customers</h1>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-separate border-spacing-0 text-[10px] text-[#221614]">
            <thead>
              <tr className="bg-[#6f200f] text-left text-white">
                <th className="border-b border-r border-[#8d4a3d] px-3 py-2 font-medium first:rounded-tl-[10px] first:border-l">Id</th>
                <th className="border-b border-r border-[#8d4a3d] px-3 py-2 font-medium">Name</th>
                <th className="border-b border-r border-[#8d4a3d] px-3 py-2 font-medium">Phone</th>
                <th className="border-b border-r border-[#8d4a3d] px-3 py-2 font-medium">Address</th>
                <th className="border-b border-r border-[#8d4a3d] px-3 py-2 font-medium">Ordered No.</th>
                <th className="border-b border-r border-[#8d4a3d] px-3 py-2 font-medium">Status</th>
                <th className="border-b border-r border-[#8d4a3d] px-3 py-2 font-medium">Created date</th>
                <th className="border-b border-r border-[#8d4a3d] px-3 py-2 font-medium">Modified date</th>
                <th className="border-b border-[#8d4a3d] px-3 py-2 font-medium last:rounded-tr-[10px] last:border-r">
                  Created by
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((row, index) => (
                <tr
                  key={`${row[0]}-${index}`}
                  className={`cursor-pointer transition hover:bg-[#f7ebe5] ${
                    index % 2 === 0 ? 'bg-[#fff9f6]' : 'bg-white'
                  }`}
                  onClick={() => navigate(`/customers/${row[0]}`)}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${row[0]}-${cellIndex}`}
                      className={`border-b border-r border-[#cfc1ba] px-3 py-2 first:border-l ${
                        index === customers.length - 1
                          ? cellIndex === 0
                            ? 'rounded-bl-[10px]'
                            : cellIndex === row.length - 1
                              ? 'rounded-br-[10px]'
                              : ''
                          : ''
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default CustomerList
