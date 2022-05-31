import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="fixed w-full h-40 shadow-xl z-50 bg-gray-900">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/as_logo_transparent.png"
          width="260"
          height="140"
          alt="logo"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-secondary test-sm uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-secondary test-sm uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-secondary test-sm uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-secondary test-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-secondary test-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex text-secondary">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-secondary p-10 ease-in duration-500">
          <div>
            <div className="flex justify-between items-center  border-gray-900 pb-8">
              <Image
                src="/../public/assets/as_logo_transparent.png"
                width="140"
                height="120"
                alt="logo"
              />

              <div className="rounded-full text-secondary transition-all duration-500 hover:translate-y-1 shadow-lg hover:shadow-gray-900 border-t-gray-400  hover:border-t-white border shadow-white p-3 cursor-pointer">
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="text-right text-secondary border-b border-white ">
              The doer alone learneth.
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase  mt-10">
              <Link href="/">
                <li className="ml-10 p-3 text-secondary  border-l border-slate-700  text-sm hover:border-white">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 p-3 text-secondary border-l border-slate-700 text-sm hover:border-white">
                  About
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 p-3 text-secondary border-l border-slate-700 text-sm hover:border-white">
                  Skills
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 p-3 text-secondary border-l border-slate-700 text-sm hover:border-white">
                  Projects
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 p-3 text-secondary border-l  border-slate-700 text-sm hover:border-white">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
