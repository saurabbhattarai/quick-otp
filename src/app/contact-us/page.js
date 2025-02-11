import Header from "@/app/components/Header/Header";

export default function Contact() {
    return (
        <div className="bg-green-50">
            <Header />
            <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl mt-20 relative z-10 py-10">
                <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="email" 
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" 
                            placeholder="Enter your email" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Report a Message</label>
                        <textarea 
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" 
                            placeholder="Write your message here..." 
                            rows="5" 
                            required
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
