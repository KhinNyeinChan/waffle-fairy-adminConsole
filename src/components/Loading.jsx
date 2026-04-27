import loginLogo from '../assets/login-logo.svg'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function LoadingSpinner() {
  return (
    <div
      className="h-4 w-4 animate-spin rounded-full border-2 border-[#7a2f1f] border-t-transparent"
      aria-hidden="true"
    />
  )
}

function Loading() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigate('/login', { replace: true })
    }, 10000)

    return () => window.clearTimeout(timer)
  }, [navigate])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fdfcf9] text-[#6b2a1f]">
      <div className="pointer-events-none absolute -left-24 -top-20 h-80 w-80 rounded-full bg-[#6f200f] blur-3xl sm:-left-16 sm:-top-14 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute left-40 -top-28 h-72 w-72 rounded-full bg-[#f4c849] blur-3xl sm:left-56 sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute -bottom-24 right-40 h-72 w-72 rounded-full bg-[#f3c84f] blur-3xl sm:right-56 sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-[#6f200f] blur-3xl sm:-right-16 sm:h-96 sm:w-96" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
        <div className="flex flex-col items-center text-center">
          <img
            src={loginLogo}
            alt="Waffle Fairy"
            className="h-28 w-28 select-none rounded-full border-4 border-white object-cover shadow-[0_10px_30px_rgba(111,32,15,0.18)] sm:h-32 sm:w-32"
          />

          <p className="mt-5 text-[11px] font-bold leading-4 text-[#7a2f1f] sm:text-[12px]">
            Your Fairy
            <br />
            Your Choice
          </p>

          <div className="mt-4">
            <LoadingSpinner />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Loading
