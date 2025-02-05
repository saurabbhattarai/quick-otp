"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-yellow-50 to-green-50 container">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Top Left */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-800">quick-otp.net</span>
            </a>
          </div>

          {/* Navigation Links - Centered */}
          <div className="hidden lg:flex items-center justify-between gap-x-10">
            <a href="/" className="text-lg font-semibold text-green-800 hover:text-green-700">Home</a>
            <a href="/about-us" className="text-lg font-semibold text-green-800 hover:text-green-700">About</a>
            <a href="#" className="text-lg font-semibold text-green-800 hover:text-green-700">Blogs</a>
            <a href="/contact-us" className="text-lg font-semibold text-green-800 hover:text-green-700">Contact</a>
          </div>

          {/* Mobile Menu Button (Hidden for now) */}
          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-lg lg:hidden hover:bg-yellow-200 focus:bg-yellow-200"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}