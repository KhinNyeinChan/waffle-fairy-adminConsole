import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Topbar from '../components/Topbar.jsx'
import Button from "../components/Button.jsx"

const menuRecords = {
  '01': { name: 'Waffle Combo', createdDate: '2026-04-10', price: '12', description: 'Combo set', category: 'Breakfast' },
  '02': { name: 'Chocolate Waffle', createdDate: '2026-04-11', price: '8', description: 'Sweet waffle', category: 'Desserts' },
  '03': { name: 'Iced Latte', createdDate: '2026-04-12', price: '5', description: 'Cold coffee', category: 'Beverages' },
  '04': { name: 'Fruit Bowl', createdDate: '2026-04-13', price: '7', description: 'Fresh fruit', category: 'Snacks' },
  '05': { name: 'Seasonal Special', createdDate: '2026-04-14', price: '14', description: 'Limited item', category: 'Seasonal' },
  '06': { name: 'Mini Combo', createdDate: '2026-04-15', price: '10', description: 'Small combo', category: 'Combos' },
}

const categoryOptions = ['Breakfast', 'Desserts', 'Beverages', 'Snacks', 'Seasonal', 'Combos']

function MenuForm() {
  const navigate = useNavigate()
  const { menuId } = useParams()
  const isEditMode = Boolean(menuId)
  const menu = menuRecords[menuId] ?? {
    name: '',
    createdDate: '',
    price: '',
    description: '',
    category: 'Breakfast',
  }

  return (
    <main className="flex min-h-screen bg-[#fffdf8] text-[#6b2a1f]">
      <Navbar />

      <section className="flex min-h-screen flex-1 flex-col px-5 py-4 sm:px-6">
        <Topbar />

        <div className="mt-4 flex items-center justify-between gap-3">
          <h1 className="text-[18px] font-medium text-[#19110f]">
            Menu
          </h1>

          <div className="flex items-center gap-2">
            <Button
              buttonName={isEditMode ? 'Update' : 'Save'}
              type="submit"
              form="menu-form"
              className="inline-flex h-8 items-center justify-center rounded-md bg-[#6f200f] px-4 text-[11px] font-medium leading-none text-white shadow-[0_8px_16px_rgba(111,32,15,0.18)]"
            />

            <Button
              buttonName="Delete"
              type="button"
              className="inline-flex h-8 items-center justify-center rounded-md bg-[#6f200f] px-4 text-[11px] font-medium leading-none text-white shadow-[0_8px_16px_rgba(111,32,15,0.18)]"
            />

            <Button
              buttonName="List"
              onClick={() => navigate('/menus')}
              className="inline-flex h-8 items-center justify-center rounded-md bg-[#6f200f] px-4 text-[11px] font-medium leading-none !text-white no-underline shadow-[0_8px_16px_rgba(111,32,15,0.18)]"
            />
          </div>
        </div>

        <div className="mt-8 max-w-2xl rounded-lg border border-[#d9c7be] bg-white p-5 shadow-sm">
          <p className="mb-4 text-[11px] font-medium text-[#7a706b]">
            {isEditMode ? `Menu ID: ${menuId}` : 'New Menu'}
          </p>

          <form
            id="menu-form"
            className="grid gap-3 sm:grid-cols-2"
            onSubmit={(event) => {
              event.preventDefault()
              navigate('/menus')
            }}
          >
            <label className="flex h-10 items-center gap-2 rounded-md border border-[#ead7ce] bg-[#fdf3ef] px-3 text-sm">
              <span className="text-[11px] font-medium text-[#6f200f]">ID</span>
              <input
                type="text"
                defaultValue={menuId ?? ''}
                className="w-full bg-transparent text-sm text-[#7a2f1f] focus:outline-none"
              />
            </label>

            <label className="flex h-10 items-center gap-2 rounded-md border border-[#ead7ce] bg-[#fdf3ef] px-3 text-sm">
              <span className="text-[11px] font-medium text-[#6f200f]">Name</span>
              <input
                type="text"
                defaultValue={menu.name}
                className="w-full bg-transparent text-sm text-[#7a2f1f] focus:outline-none"
              />
            </label>

            <label className="flex h-10 items-center gap-2 rounded-md border border-[#ead7ce] bg-[#fdf3ef] px-3 text-sm">
              <span className="whitespace-nowrap text-[11px] font-medium text-[#6f200f]">
                Created date
              </span>
              <input
                type="date"
                defaultValue={menu.createdDate}
                className="w-full bg-transparent text-sm text-[#7a2f1f] focus:outline-none"
              />
            </label>

            <label className="flex h-10 items-center gap-2 rounded-md border border-[#ead7ce] bg-[#fdf3ef] px-3 text-sm">
              <span className="text-[11px] font-medium text-[#6f200f]">Price</span>
              <input
                type="number"
                defaultValue={menu.price}
                className="w-full bg-transparent text-sm text-[#7a2f1f] focus:outline-none"
              />
            </label>

            <label className="flex min-h-24 items-start gap-2 rounded-md border border-[#ead7ce] bg-[#fdf3ef] px-3 py-2 text-sm sm:col-span-2">
              <span className="pt-1 text-[11px] font-medium text-[#6f200f]">Description</span>
              <textarea
                defaultValue={menu.description}
                className="min-h-20 w-full resize-none bg-transparent text-sm text-[#7a2f1f] focus:outline-none"
              />
            </label>

            <label className="flex h-10 items-center gap-2 rounded-md border border-[#ead7ce] bg-[#fdf3ef] px-3 text-sm sm:col-span-2">
              <span className="text-[11px] font-medium text-[#6f200f]">Category</span>
              <select
                defaultValue={menu.category}
                className="w-full bg-transparent text-sm text-[#7a2f1f] focus:outline-none"
              >
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </form>
        </div>
      </section>
    </main>
  )
}

export default MenuForm
