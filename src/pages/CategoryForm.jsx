import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Topbar from '../components/Topbar.jsx'
import Button from "../components/Button.jsx"

const categoryRecords = {
  '01': { name: 'Beverages', createdDate: '2026-04-10', createdBy: 'Admin' },
  '02': { name: 'Breakfast', createdDate: '2026-04-11', createdBy: 'Admin' },
  '03': { name: 'Desserts', createdDate: '2026-04-12', createdBy: 'Admin' },
  '04': { name: 'Snacks', createdDate: '2026-04-13', createdBy: 'Admin' },
  '05': { name: 'Combos', createdDate: '2026-04-14', createdBy: 'Admin' },
  '06': { name: 'Seasonal', createdDate: '2026-04-15', createdBy: 'Admin' },
}

function CategoryForm() {
  const navigate = useNavigate()
  const { categoryId } = useParams()
  const isEditMode = Boolean(categoryId)
  const category = categoryRecords[categoryId] ?? {
    name: '',
    createdDate: '',
    createdBy: 'Admin',
  }

  return (
    <main className="flex min-h-screen bg-[#fffdf8] text-[#6b2a1f]">
      <Navbar />

      <section className="flex min-h-screen flex-1 flex-col px-5 py-4 sm:px-6">
        <Topbar />

        <div className="mt-4 flex items-center justify-between gap-3">
          <h1 className="text-[18px] font-medium text-[#19110f]">
            {isEditMode ? 'Update Category' : 'Create Category'}
          </h1>

          <div className="flex items-center gap-2">
            <Button
              buttonName={isEditMode ? 'Update' : 'Save'}
              type="submit"
              form="category-form"
              className="inline-flex h-8 items-center justify-center rounded-md bg-[#6f200f] px-4 text-[11px] font-medium leading-none text-white shadow-[0_8px_16px_rgba(111,32,15,0.18)]"
            />
            <Button
              buttonName="List"
              onClick={() => navigate('/categories')}
              className="inline-flex h-8 items-center justify-center rounded-md bg-[#6f200f] px-4 text-[11px] font-medium leading-none !text-white no-underline shadow-[0_8px_16px_rgba(111,32,15,0.18)]"
            />
          </div>
        </div>

        <div className="mt-8 max-w-2xl rounded-lg border border-[#d9c7be] bg-white p-5 shadow-sm">
          <p className="mb-4 text-[11px] font-medium text-[#7a706b]">
            {isEditMode ? `Category ID: ${categoryId}` : 'New Category'}
          </p>

          <form
            id="category-form"
            className="grid gap-3 sm:grid-cols-2"
            onSubmit={(event) => {
              event.preventDefault()
              navigate('/categories')
            }}
          >
            <label className="flex h-10 items-center gap-2 rounded-md border border-[#ead7ce] bg-[#fdf3ef] px-3 text-sm">
              <span className="text-[11px] font-medium text-[#6f200f]">ID</span>
              <input
                type="text"
                defaultValue={categoryId ?? ''}
                placeholder="Category ID"
                className="w-full bg-transparent text-sm text-[#7a2f1f] focus:outline-none"
              />
            </label>

            <label className="flex h-10 items-center gap-2 rounded-md border border-[#ead7ce] bg-[#fdf3ef] px-3 text-sm">
              <span className="text-[11px] font-medium text-[#6f200f]">Name</span>
              <input
                type="text"
                defaultValue={category.name}
                placeholder="Name"
                className="w-full bg-transparent text-sm text-[#7a2f1f] focus:outline-none"
              />
            </label>

            <label className="flex h-10 items-center gap-2 rounded-md border border-[#ead7ce] bg-[#fdf3ef] px-3 text-sm sm:col-span-2">
              <span className="text-[11px] font-medium text-[#6f200f]">Created date</span>
              <input
                type="date"
                defaultValue={category.createdDate}
                className="w-full bg-transparent text-sm text-[#7a2f1f] focus:outline-none"
              />
            </label>
          </form>
        </div>
      </section>
    </main>
  )
}

export default CategoryForm
