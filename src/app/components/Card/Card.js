"use client"
//pass the props
//country name and flag and numbers
export default function Card({flag,countries,numbers=" "}) {
    return (
        <>
          <div className="bg-gradient-to-r from-green-200 to-yellow-200 shadow-lg rounded-2xl p-6 w-full md:w-80 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">{flag}</div>
            <h2 className="text-xl font-semibold text-gray-800">{countries}</h2>
            <p className="mt-2 text-lg font-bold text-green-700">Total Numbers: {numbers}</p>
            </div>
        </>
        );
};




