import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Loading from './components/Loading.jsx'
import Login from './components/Login.jsx'
import Account from './components/Account.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<Account />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
