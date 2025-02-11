"use client";
import Header from "@/app/components/Header/Header";

export default function Hero() {
  return (
    <>
      <div className="bg-gradient-to-b from-yellow-50 to-green-50 min-h-screen container">
        {/* Header */}
        <Header />

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