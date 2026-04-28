import loginLogo from '../assets/login-logo.svg'

function Topbar() {
  return (
    <div className="flex items-center justify-end gap-2">
      <img src={loginLogo} alt="Admin" className="h-6 w-6 rounded-full object-cover" />
      <span className="text-[11px] font-medium text-[#1f1715]">Admin</span>
    </div>
  )
}

export default Topbar
