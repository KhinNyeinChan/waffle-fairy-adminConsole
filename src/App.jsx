import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Loading from './pages/Loading.jsx'
import Login from './pages/Login.jsx'
import Account from './pages/Account.jsx'
import MainPage from './pages/MainPage.jsx'
import CustomerList from './pages/CustomerList.jsx'
import CustomerUpdate from './pages/CustomerUpdate.jsx'
import CategoryList from './pages/CategoryList.jsx'
import CategoryForm from './pages/CategoryForm.jsx'
import MenuList from './pages/MenuList.jsx'
import MenuForm from './pages/MenuForm.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<Account />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/customers/:customerId" element={<CustomerUpdate />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/new" element={<CategoryForm />} />
        <Route path="/categories/:categoryId" element={<CategoryForm />} />
        <Route path="/menus" element={<MenuList />} />
        <Route path="/menus/new" element={<MenuForm />} />
        <Route path="/menus/:menuId" element={<MenuForm />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
