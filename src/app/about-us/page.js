import Header from "@/app/components/Header/Header";

export default function About() {
    return (
        <>
            <Header />
            <div className="bg-gradient-to-b from-yellow-50 to-green-50 min-h-screen py-10">
                <div className="max-w-4xl mx-auto p-6 text-center">
                    <h1 className="text-5xl font-bold text-green-900 sm:text-6xl lg:text-7xl py-2">About Quick-OTP</h1>
                    <p className="mt-6 text-lg text-green-700 sm:text-xl py-2">
                        Welcome to <span className="font-semibold">Quick-OTP</span>, your go-to solution for accessing OTPs online.
                        Our platform provides users with publicly available phone numbers from the USA and Canada,
                        allowing them to receive OTPs for various online services.
                    </p>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md relative">
                        <h2 className="text-2xl font-semibold text-green-800 py-2">How It Works</h2>
                        <ul className="text-green-700 text-lg list-disc list-inside py-2">
                            <li>Choose a phone number from our available list.</li>
                            <li>Use the selected number on websites requiring phone verification.</li>
                            <li>View the OTP received on our site in real-time.</li>
                        </ul>
                    </div>
                    <p className="text-lg text-green-700 sm:text-xl py-2">
                        Our service is fast, secure, and easy to use, making it ideal for those who need quick access
                        to verification codes without using their personal numbers.
                    </p>
                </div>
            </div>
        </>
    );
}
