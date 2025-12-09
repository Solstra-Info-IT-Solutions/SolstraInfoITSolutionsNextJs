"use client"

export default function ComingSoon() {
    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
            
            {/* Background Image */}
            <img
                src="/assets/images/comingsoon.png"
                alt="Coming Soon"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 bg-opacity-50"></div>

            {/* Text Content */}
            <div className="relative text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    We&apos;re Launching Something Awesome!
                </h1>
                <p className="text-lg md:text-2xl mb-6">
                    This page is under development — stay tuned 🚀
                </p>

                {/* Home Button */}
                <a
                    href="/"
                    className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition-all duration-300"
                >
                    Go to Home
                </a>
            </div>
        </div>
    );
}
    