// import React from "react";

// const ComingSoon = () => {
//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4">
//             <img
//                 src="/assets/images/comingsoon.jpg"
//                 alt="Coming Soon"
//                 className="w-full max-w-3xl rounded-2xl shadow-lg"
//             />
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-8">
//                 We&apos;re Launching Something Awesome!
//             </h1>
//             <p className="text-gray-600 mt-2 text-lg md:text-xl">
//                 This page is under development — stay tuned 🚀
//             </p>
//         </div>
//     );
// };

// export default ComingSoon;


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

            {/* Overlay (optional for readability) */}
            <div className="absolute inset-0 bg-black/40 bg-opacity-50"></div>

            {/* Text Content */}
            <div className="relative text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    We&apos;re Launching Something Awesome!
                </h1>
                <p className="text-lg md:text-2xl">
                    This page is under development — stay tuned
                </p>
            </div>
        </div>
    );
}


