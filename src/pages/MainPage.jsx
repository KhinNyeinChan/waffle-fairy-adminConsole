import Navbar from '../components/Navbar.jsx'

function MainPage() {
  return (
    <main className="flex min-h-screen bg-[#fffdf8] text-[#6b2a1f]">
      <Navbar />
      <section className="flex min-h-screen flex-1 items-center justify-center px-6 py-10">
        <h1 className="text-4xl font-semibold tracking-tight text-[#7a2f1f] sm:text-5xl">
          Hello
        </h1>
      </section>
    </main>
  )
}

export default MainPage
