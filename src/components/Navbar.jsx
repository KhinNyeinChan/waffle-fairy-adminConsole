import { Link, NavLink, useNavigate } from 'react-router-dom'
import loginLogo from '../assets/login-logo.svg'
import Button from "../components/Button.jsx"

function DashboardIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 ${className}`} aria-hidden="true">
      <path fill="currentColor" d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 4h7v3h-7v-3Z" />
    </svg>
  )
}

function PeopleIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 ${className}`} aria-hidden="true">
      <path
        fill="currentColor"
        d="M9 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm6 1a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM9 14c-3.33 0-6 1.79-6 4v2h12v-2c0-2.21-2.67-4-6-4Zm6 1.5c-.48 0-.94.05-1.38.13A5.8 5.8 0 0 1 16 20v0h5v-2c0-1.93-2.02-3.5-6-3.5Z"
      />
    </svg>
  )
}

function GridIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 ${className}`} aria-hidden="true">
      <path fill="currentColor" d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z" />
    </svg>
  )
}

function MenuIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 ${className}`} aria-hidden="true">
      <path fill="currentColor" d="M5 4h14v16H5V4Zm2 2v12h10V6H7Zm1 2h8v2H8V8Zm0 4h8v2H8v-2Z" />
    </svg>
  )
}

function PromotionIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 ${className}`} aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.5 3 3 14.5V21h6.5L21 9.5 14.5 3Zm0 2.83L18.17 9.5 9 18.67 5.33 15 14.5 5.83ZM7 17l-1-1 2-2 1 1-2 2Z"
      />
    </svg>
  )
}

function OrderIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 ${className}`} aria-hidden="true">
      <path
        fill="currentColor"
        d="M6 3h13l-1.5 13H7.5L6 3Zm1.7 2 .93 9h8.74l1.04-9H7.7ZM7 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm8 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
      />
    </svg>
  )
}

function SaleIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 ${className}`} aria-hidden="true">
      <path
        fill="currentColor"
        d="m4 17 6-6 4 4 6-8v4h2V4h-7v2h4.21l-5.2 6.93-4.01-4.01L2.59 17H4Z"
      />
    </svg>
  )
}

function SettingIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 ${className}`} aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.14 12.94a7.7 7.7 0 0 0 .05-.94 7.7 7.7 0 0 0-.05-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.5 7.5 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.57.22-1.1.53-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.7 8.84a.5.5 0 0 0 .12.64L4.85 11.06c-.03.31-.05.62-.05.94s.02.63.05.94L2.82 14.52a.5.5 0 0 0-.12.64l1.92 3.32a.5.5 0 0 0 .6.22l2.39-.96c.5.4 1.04.72 1.63.94l.36 2.54a.5.5 0 0 0 .5.42h3.84a.5.5 0 0 0 .5-.42l.36-2.54c.58-.22 1.12-.54 1.63-.94l2.39.96a.5.5 0 0 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4Z"
      />
    </svg>
  )
}

function Navbar() {
  const navigate = useNavigate()
  
  const items = [
    { label: 'Dashboard', icon: DashboardIcon, to: '/main' },
    { label: 'Customer', icon: PeopleIcon, to: '/customers' },
    { label: 'Category', icon: GridIcon, to: '/categories' },
    { label: 'Menu', icon: MenuIcon, to: '/menus' },
    { label: 'Promotion', icon: PromotionIcon , to: '/promotions'},
    { label: 'Order', icon: OrderIcon, to: '/orders' },
    { label: 'Setting', icon: SettingIcon },
  ]

  return (
    <aside className="flex min-h-screen w-[126px] shrink-0 flex-col border-r border-[#ead7ce] bg-[#f9ece6] px-3 py-4">
      <div className="flex justify-center">
        <img
          src={loginLogo}
          alt="Waffle Fairy"
          className="h-16 w-16 rounded-full border-2 border-white object-cover shadow-[0_8px_18px_rgba(111,32,15,0.14)]"
        />
      </div>

      <nav className="mt-4 flex flex-col gap-2">
        {items.map(({ label, icon: Icon, to }) => {
          const base =
            'flex h-7 w-full items-center gap-2 rounded-md px-2 text-[11px] font-medium transition'
          const content = ({ isActive }) => (
            <>
              <Icon className={isActive ? 'text-[#6f200f]' : 'text-black'} />
              <span className={`leading-none ${isActive ? 'text-[#6f200f]' : 'text-black'}`}>{label}</span>
            </>
          )

          return to ? (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `${base} ${isActive
                  ? 'border border-[#f3c84fcc] bg-white/70 text-[#6f200f]'
                  : 'text-[#19110f] hover:bg-white/70'
                }`
              }
            >
              {content}
            </NavLink>
          ) : (
            <button
              key={label}
              type="button"
              className={`${base} text-[#19110f] hover:bg-white/70`}
            >
              <>
                <Icon />
                <span className="leading-none">{label}</span>
              </>
            </button>
          )
        })}
      </nav>

      <div className="mt-4">
        <Button
          buttonName="Logout"
          onClick={() => navigate('/login')}
          className="block px-2 text-center text-[11px] font-medium text-[#f2b51d] transition hover:text-[#d89800]"
        />
      </div>
    </aside>
  )
}

export default Navbar
