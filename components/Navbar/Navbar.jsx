import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { BsPersonLinesFill } from 'react-icons/bs';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import SideMenu from './SideMenu';

const linkList = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/' },
  { title: 'Skills', link: '/' },
  { title: 'Projects', link: '/' },
  { title: 'Contact', link: '/' },
];

const socialsList = [
  {
    icon: FaLinkedinIn,
    link: '#',
  },
  {
    icon: FaGithub,
    link: '#',
  },
  {
    icon: AiOutlineMail,
    link: '#',
  },
  {
    icon: BsPersonLinesFill,
    link: '#',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateIsMenuOpen = (value) => setIsMenuOpen(value);

  return (
    <div className="fixed w-full h-40 shadow-xl z-50 bg-gray-900">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/logo_transparent.png"
          width="160"
          height="140"
          alt="logo"
        />
        <div>
          <ul className="hidden md:flex">
            {linkList.map(({ link, title }) => (
              <Link key={link + title} href={link}>
                <li className="px-5 text-secondary test-sm transition-all uppercase border-b border-slate-700 overflow-hidden hover:border-white hover:-m-0.5 hover:-translate-y-0.5">
                  {title}
                </li>
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
      </div>
      {
        <SideMenu
          isMenuOpen={isMenuOpen}
          updateIsMenuOpen={updateIsMenuOpen}
          linkList={linkList}
          socialsList={socialsList}
        />
      }
    </div>
  );
};

export default Navbar;
