import { Link, useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Topbar from '../components/Topbar.jsx'
import Button from "../components/Button.jsx"

function CustomerUpdate() {
  const navigate = useNavigate()

  const { customerId } = useParams()

  return (
    <main className="flex min-h-screen bg-[#fffdf8] text-[#6b2a1f]">
      <Navbar />

      <section className="flex min-h-screen flex-1 flex-col px-5 py-4 sm:px-6">
        <Topbar />

        <div className="mt-4 flex items-center justify-between gap-3">
          <h1 className="text-[18px] font-medium text-[#19110f]">Customer</h1>
          <div className="flex items-center gap-2">
            <Button
              buttonName="Update"
              type="submit"
              form="customer-update-form"
              className="inline-flex h-8 items-center justify-center rounded-md bg-[#6f200f] px-4 text-[11px] font-medium leading-none text-white shadow-[0_8px_16px_rgba(111,32,15,0.18)]"
            />

            <Button
              buttonName="Delete"
              type="button"
              className="inline-flex h-8 items-center justify-center rounded-md bg-[#6f200f] px-4 text-[11px] font-medium leading-none text-white shadow-[0_8px_16px_rgba(111,32,15,0.18)]"
            />

            <Button
              buttonName="List"
              onClick={() => navigate('/customers')}
              className="inline-flex h-8 items-center justify-center rounded-md bg-[#6f200f] px-4 text-[11px] font-medium leading-none !text-white no-underline shadow-[0_8px_16px_rgba(111,32,15,0.18)]"
            />

          </div>
        </div>

        <div className="mt-8 max-w-2xl rounded-lg border border-[#d9c7be] bg-white p-5 shadow-sm">
          <p className="mb-4 text-[11px] font-medium text-[#7a706b]">
            Customer ID: {customerId}
          </p>

          <form id="customer-update-form" className="grid gap-3 sm:grid-cols-2">
            <label className="flex h-10 items-center gap-2 rounded-md border border-[#ead7ce] bg-[#fdf3ef] px-3 text-sm">
              <span className="text-[11px] font-medium text-[#6f200f]">Name</span>
              <input
                type="text"
                className="w-full bg-transparent text-sm text-[#7a2f1f] placeholder:text-[#a88d83] focus:outline-none"
              />
            </label>

            <label className="flex h-10 items-center gap-2 rounded-md border border-[#ead7ce] bg-[#fdf3ef] px-3 text-sm">
              <span className="text-[11px] font-medium text-[#6f200f]">Phone</span>
              <input
                type="tel"
                className="w-full bg-transparent text-sm text-[#7a2f1f] focus:outline-none"
              />
            </label>

            <label className="flex h-10 items-center gap-2 rounded-md border border-[#ead7ce] bg-[#fdf3ef] px-3 text-sm sm:col-span-2">
              <span className="text-[11px] font-medium text-[#6f200f]">Address</span>
              <input
                type="text"
                className="w-full bg-transparent text-sm text-[#7a2f1f] focus:outline-none"
              />
            </label>

            <label className="flex h-10 items-center gap-2 rounded-md border border-[#ead7ce] bg-[#fdf3ef] px-3 text-sm">
              <span className="whitespace-nowrap text-[11px] font-medium text-[#6f200f]">
                Ordered no
              </span>
              <input
                type="text"
                className="w-full bg-transparent text-sm text-[#7a2f1f] focus:outline-none"
              />
            </label>

            <label className="flex h-10 items-center gap-2 rounded-md border border-[#ead7ce] bg-[#fdf3ef] px-3 text-sm">
              <span className="text-[11px] font-medium text-[#6f200f]">Status</span>
              <input
                type="text"
                className="w-full bg-transparent text-sm text-[#7a2f1f] focus:outline-none"
              />
            </label>
          </form>
        </div>
      </section>
    </main>
  )
}

export default CustomerUpdate
