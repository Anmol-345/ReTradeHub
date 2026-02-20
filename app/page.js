import Image from "next/image"

export default function Home() {
  return (
    <main className="bg-gray-300 min-h-screen flex items-center justify-center p-6">

      {/* Main Rounded Container */}
      <div
        className="relative w-full max-w-7xl h-[90vh] rounded-3xl overflow-hidden 
                   bg-cover bg-center px-10 py-8"
        style={{ backgroundImage: "url('/media/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r 
                        from-black/80 via-black/60 to-transparent" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-10 
                        bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),
                        linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
                        bg-[size:40px_40px]" />

        <div className="relative z-10 h-full flex flex-col">

          {/* Navbar */}
          <nav className="flex items-center justify-between">

            <h1 className="text-white font-semibold text-lg">Ev-v</h1>

            <ul className="hidden md:flex gap-10 text-white text-sm font-light">
              <li className="cursor-pointer hover:text-blue-400 transition">Home</li>
              <li className="cursor-pointer hover:text-blue-400 transition">Sell Gadgets</li>
              <li className="cursor-pointer hover:text-blue-400 transition">Buy Gadgets</li>
              <li className="cursor-pointer hover:text-blue-400 transition">About Us</li>
            </ul>

            <button className="bg-gray-800/70 backdrop-blur px-5 py-2 rounded-full 
                               text-white text-sm hover:bg-gray-700 transition">
              Login
            </button>
          </nav>


          {/* Hero */}
          <section className="flex-1 flex items-center">

            <div className="max-w-xl text-white">

              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
                Turn Your Old Electronics <br />
                into Cash Today!
              </h2>

              <p className="text-gray-300 mb-8">
                List your gadgets and let shopkeepers bid for the best price —
                quick, easy, and rewarding.
              </p>

              <button className=" bg-blue-500 
                                 px-8 py-3 rounded-full font-medium hover:scale-105 transition text-black">
                Sell And Earn
              </button>

            </div>

          </section>

        </div>
      </div>
    </main>
  )
}