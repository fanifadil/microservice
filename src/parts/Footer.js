import React from "react";
import Link from "next/link";
export default function Footer() {
  function submit() {}
  return (
    <footer className='container mx-auto'>
      <div className='flex justify-between'>
        <div className='w-1/6'>
          <h6 className='text-white'>Company</h6>
          <ul className='mt-4'>
            <li className='mt-2'>
              <Link href=''>
                <a className='text-indigo-500 hover:text-indigo-200 hover:underline'>
                  Api Developers
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href=''>
                <a className='text-indigo-500 hover:text-indigo-200 hover:underline'>
                  Carrer
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href=''>
                <a className='text-indigo-500 hover:text-indigo-200 hover:underline'>
                  Our Story
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href=''>
                <a className='text-indigo-500 hover:text-indigo-200 hover:underline'>
                  New Soon
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='w-1/6'>
          <h6 className='text-white'>Company</h6>
          <ul className='mt-4'>
            <li className='mt-2'>
              <Link href=''>
                <a className='text-indigo-500 hover:text-indigo-200 hover:underline'>
                  Get Scholarship
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href=''>
                <a className='text-indigo-500 hover:text-indigo-200 hover:underline'>
                  Our Pathskills
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href=''>
                <a className='text-indigo-500 hover:text-indigo-200 hover:underline'>
                  All Features
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href=''>
                <a className='text-indigo-500 hover:text-indigo-200 hover:underline'>
                  Refund Policy
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='w-1/6'>
          <h6 className='text-white'>Company</h6>
          <p className='mt-4 text-indigo-500 leading-loose'>
            Micro Centre
            <br />
            Alleysi Block X No. 12
            <br />
            Jakarta Selatan, Indonesia
            <br />
            +21 2020 5555
            <br />
          </p>
        </div>
        <div className='w-2/6'>
          <h6 className='text-white'>Promotions</h6>
          <p className='mt-4 text-indigo-500'>
            Submit Your Email For New Update
          </p>
          <form onSubmit={submit}>
            <input
              type='text'
              className='bg-white focus:outline-non border-0 px-6 py-3 mt-6'
              placeholder='Your Email Address'
            />
            <button className='bg-red-500 hover:bg-red-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3'>
              Daftar Now
            </button>
          </form>
        </div>
      </div>
      <div className='border-t pt-8 mt-8 border-gray-600 text-center'>
        <p className='text-gray-100'>2020 Copyrights</p>
      </div>
    </footer>
  );
}
