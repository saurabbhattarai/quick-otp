"use client";

export default function Hero() {
  return (
    <>
      <div className="bg-gradient-to-b from-yellow-50 to-green-50 min-h-screen container">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-yellow-50 to-green-50 container">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo - Top Left */}
              <div className="flex-shrink-0">
                <a href="#" className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-green-800">quick-otp.net</span>
                </a>
              </div>

              {/* Navigation Links - Centered */}
              <div className="hidden lg:flex items-center justify-between gap-x-10">
                <a href="#" className="text-lg font-semibold text-green-800 hover:text-green-700">Home</a>
                <a href="#" className="text-lg font-semibold text-green-800 hover:text-green-700">About</a>
                <a href="#" className="text-lg font-semibold text-green-800 hover:text-green-700">Services</a>
                <a href="#" className="text-lg font-semibold text-green-800 hover:text-green-700">Contact</a>
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

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 sm:py-24 lg:py-32">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-green-900 sm:text-6xl lg:text-7xl">
                  Get Quick OTPs for Free with{" "}
                  <span className="relative inline-block">
                    <span className="absolute inset-x-0 bottom-0 h-4 bg-yellow-200 transform rotate-2"></span>
                    <span className="relative text-green-800">quick-otp.net</span>
                  </span>
                </h1>

                <p className="mt-6 text-lg text-green-700 sm:text-xl">
                  Secure, instant, and hassle-free OTP delivery. Input the provided phone numbers to websites and receive OTPs directly through our platform. Enhance your authentication process with ease.
                </p>

                <div className="mt-10">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-full sm:w-auto hover:bg-green-700 transition-all duration-200"
                  >
                    Start Exploring
                  </a>
                </div>
              </div>

              {/* Right Column - Visual Content */}
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-200 rounded-3xl transform rotate-2"></div>
                <div className="relative p-8 bg-white rounded-3xl shadow-lg">
                  {/* Add your image here */}
                  <div className="w-full h-64 rounded-lg bg-gray-100 flex items-center justify-center">
                    <span className="text-green-700">Your Image Here</span>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-green-700">
                      "quick-otp.net makes authentication seamless and secure."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-64 h-64 bg-yellow-200 rounded-full opacity-20 -top-32 -left-32"></div>
          <div className="absolute w-96 h-96 bg-green-100 rounded-full opacity-20 -bottom-48 -right-48"></div>
        </div>
      </div>
    </>
  );
}