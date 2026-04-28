import loginLogo from '../assets/login-logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import Button from "../components/Button.jsx"

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.19 2.2Z"
      />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17 9h-1V7a4 4 0 1 0-8 0v2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2ZM10 7a2 2 0 1 1 4 0v2h-4V7Z"
      />
    </svg>
  )
}

function Account() {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/main')
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fdfcf9] text-[#6b2a1f]">
      <div className="pointer-events-none absolute -left-24 -top-20 h-80 w-80 rounded-full bg-[#6f200f] blur-3xl sm:-left-16 sm:-top-14 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute left-40 -top-28 h-72 w-72 rounded-full bg-[#f4c849] blur-3xl sm:left-56 sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute -bottom-24 right-40 h-72 w-72 rounded-full bg-[#f3c84f] blur-3xl sm:right-56 sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-[#6f200f] blur-3xl sm:-right-16 sm:h-96 sm:w-96" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
        <div className="flex w-full max-w-sm flex-col items-center text-center">
          <img
            src={loginLogo}
            alt="Waffle Fairy"
            className="h-28 w-28 select-none rounded-full border-4 border-white object-cover shadow-[0_10px_30px_rgba(111,32,15,0.18)] sm:h-32 sm:w-32"
          />

          <h1 className="mt-8 text-[19px] font-medium tracking-tight text-[#7a2f1f] sm:text-[20px]">
            Create new account
          </h1>

          <form className="mt-9 flex w-full flex-col items-center gap-3" onSubmit={handleSubmit}>
            <label className="flex h-10 w-[190px] items-center gap-2 rounded-lg bg-[#fce9e0] px-3 text-sm text-[#9b7f75] shadow-[0_1px_0_rgba(0,0,0,0.02)] sm:w-[230px]">
              <span className="text-[#6f200f]">
                <UserIcon />
              </span>
              <input
                type="text"
                name="username"
                placeholder="User name"
                className="w-full bg-transparent text-sm text-[#7a2f1f] placeholder:text-[#a88d83] focus:outline-none"
              />
            </label>

            <label className="flex h-10 w-[190px] items-center gap-2 rounded-lg bg-[#fce9e0] px-3 text-sm text-[#9b7f75] shadow-[0_1px_0_rgba(0,0,0,0.02)] sm:w-[230px]">
              <span className="text-[#6f200f]">
                <PhoneIcon />
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full bg-transparent text-sm text-[#7a2f1f] placeholder:text-[#a88d83] focus:outline-none"
              />
            </label>

            <label className="flex h-10 w-[190px] items-center gap-2 rounded-lg bg-[#fce9e0] px-3 text-sm text-[#9b7f75] shadow-[0_1px_0_rgba(0,0,0,0.02)] sm:w-[230px]">
              <span className="text-[#6f200f]">
                <LockIcon />
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full bg-transparent text-sm text-[#7a2f1f] placeholder:text-[#a88d83] focus:outline-none"
              />
            </label>

            <Button
              buttonName="Create"
              type="submit"
              className="mt-6 h-8 w-[98px] rounded-md bg-[#772714] text-[12px] font-medium text-white shadow-[0_10px_20px_rgba(119,39,20,0.2)] transition hover:bg-[#6a2312] focus:outline-none focus:ring-2 focus:ring-[#b55a42]/40 focus:ring-offset-2 focus:ring-offset-transparent"
            />

            <Button
              buttonName="Login"
              onClick={() => navigate('/login')}
              className="text-[11px] text-[#7a706b] transition hover:text-[#5f524c]"
            />

          </form>
        </div>
      </section>
    </main>
  )
}

export default Account
