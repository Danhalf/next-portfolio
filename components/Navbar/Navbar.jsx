import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

import SideMenu from './SideMenu';
import { linkList, socialsList } from '../../store/store';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateIsMenuOpen = (value) => setIsMenuOpen(value);

  return (
    <header className="fixed w-full h-40 shadow-xl z-50 bg-gray-900">
      <nav className="xl:container flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/logo_transparent.png"
          width="140"
          height="140"
          alt="logo"
        />
        <div>
          <ul className="hidden md:flex">
            {linkList.map(({ link, title }) => (
              <Link key={link + title} href={link}>
                {/* <li className="px-5 text-secondary test-sm transition-all uppercase border-b border-slate-700 overflow-hidden hover:border-white hover:-m-0.5 hover:-translate-y-0.5"> */}
                <li>
                  <button className="button-rounded mx-3 w-28 ">
                    {' '}
                    {title}{' '}
                  </button>
                </li>
                {/* </li> */}
              </Link>
            ))}
          </ul>
        </div>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex md:hidden text-secondary"
        >
          <AiOutlineMenu size={25} />
        </button>
      </nav>
      {
        <SideMenu
          isMenuOpen={isMenuOpen}
          updateIsMenuOpen={updateIsMenuOpen}
          linkList={linkList}
          socialsList={socialsList}
        />
      }
    </header>
  );
};

export default Navbar;
