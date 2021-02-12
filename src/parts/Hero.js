import React from "react";

export default function Hero() {
  function submit() {}
  return (
    <div className='flex justify-between items-center'>
      <div className='w-1/2'>
        <h1 className='text-5xl text-white mb-5 font-bold'>
          <span className='text-blue-400'>The New </span> Way to <br />
          Achieve Good <span className='text-blue-400'>Skills</span>
        </h1>
        <p className='text-white font-light text-lg mb-8'>
          We provide tons of pathskill that you <br /> can choose and focus on
        </p>
        <form onSubmit={submit}>
          <input
            type='text'
            className='bg-white focus:outline-non border-0 px-6 py-3 w-1/2'
            placeholder='Your Email Address'
          />
          <button className='bg-red-500 hover:bg-red-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3'>
            Daftar Sekarang
          </button>
        </form>
      </div>
      <div className='w-1/2 flex justify-end pt-24 pr-16'>
        <div className='relative' style={{ width: 369, height: 440 }}>
          <div
            className='absolute border-indigo-700 border-2 -mt-12 -mr-6 right-0'
            style={{ width: 324, height: 374 }}></div>
          <div className='absolute w-full h-full -mb-8 -ml-8'>
            <img
              src='/images/img-hero-mbak-alyssa-cakep.jpg'
              alt='testimonial'
            />
          </div>
          <div
            className='absolute z-10 bg-white py-3 px-4 mt-12'
            style={{ transform: "translateX(-50%)", width: 290 }}>
            <p className='text-gray-900 mb-2'>
              Metode belajar yang santai seperti nonton drakor di Netflix
            </p>
            <span className='text-gray-600'>Alysa, Web Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
