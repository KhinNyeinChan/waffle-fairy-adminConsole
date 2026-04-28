import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Topbar from '../components/Topbar.jsx'
import Button from "../components/Button.jsx"

const orders = [
  ['01', '4353434', 4000.00, '2026-04-10', '2026-04-20'],
  ['02', '3435345', 6000.00, '2026-04-11', '2026-04-21'],
  ['03', '5353333', 3000.00, '2026-04-12', '2026-04-22'],
  ['04', '5765565', 4000.00, '2026-04-13', '2026-04-23'],
  ['05', '1323455', 5000.00, '2026-04-14', '2026-04-24'],
  ['06', '9086766', 7000.00, '2026-04-15', '2026-04-25'],
]

function OrderList() {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-screen bg-[#fffdf8] text-[#6b2a1f]">
      <Navbar />

      <section className="flex min-h-screen flex-1 flex-col px-5 py-4 sm:px-6">
        <Topbar />

        <div className="mt-4 flex items-center justify-between gap-3">
          <h1 className="text-[18px] font-medium text-[#19110f]">Orders</h1>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-separate border-spacing-0 text-[10px] text-[#221614]">
            <thead>
              <tr className="bg-[#6f200f] text-left text-white">
                <th className="border-b border-r border-[#8d4a3d] px-3 py-2 font-medium first:rounded-tl-[10px] first:border-l">
                  ID
                </th>
                <th className="border-b border-r border-[#8d4a3d] px-3 py-2 font-medium">
                  Customer ID
                </th>
                <th className="border-b border-r border-[#8d4a3d] px-3 py-2 font-medium">
                  Price
                </th>
                <th className="border-b border-r border-[#8d4a3d] px-3 py-2 font-medium">
                  Created date
                </th>
                <th className="border-b border-[#8d4a3d] px-3 py-2 font-medium last:rounded-tr-[10px] last:border-r">
                  Modified date
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((row, index) => (
                <tr
                  key={`${row[0]}-${index}`}
                  className={`cursor-pointer transition hover:bg-[#f7ebe5] ${index % 2 === 0 ? 'bg-[#fff9f6]' : 'bg-white'
                    }`}
                  onClick={() => navigate(`/orders/${row[0]}`)}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${row[0]}-${cellIndex}`}
                      className={`border-b border-r border-[#cfc1ba] px-3 py-2 first:border-l ${index === orders.length - 1
                        ? cellIndex === 0
                          ? 'rounded-bl-[10px]'
                          : cellIndex === row.length - 1
                            ? 'rounded-br-[10px]'
                            : ''
                        : ''
                        }`}
                    >
                      {/* Formatting Logic Starts Here */}
                      {typeof cell === 'number'
                        ? new Intl.NumberFormat('en-US', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        }).format(cell)
                        : cell}
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

export default OrderList
