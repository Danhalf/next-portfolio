import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import clsx from 'clsx';

const SideMenu = ({ isMenuOpen, updateIsMenuOpen, linkList, socialsList }) => (
  <>
    <aside
      className={clsx(
        isMenuOpen ? 'translate-x-0' : '-translate-x-[100%]',
        'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-secondary p-10 transition-all ease-in duration-500 z-40'
      )}
    >
      <div>
        <div className="flex justify-between items-center border-gray-900 pb-8">
          <Image
            src="/../public/assets/logo_white.png"
            width="120"
            height="120"
            alt="logo"
          />

          <button className="button-rounded">
            <AiOutlineClose onClick={() => updateIsMenuOpen(false)} size={25} />
          </button>
        </div>
        <div className="text-right text-secondary border-b border-white ">
          The doer alone learneth.
        </div>
      </div>
      <div className="flex flex-col py-4">
        <ul className="uppercase  mt-10">
          {linkList.map(({ link, title }) => (
            <Link key={link + title} href={link}>
              <li className="ml-10 p-3 text-secondary  border-l border-slate-700  text-sm hover:border-white">
                {title}
              </li>
            </Link>
          ))}
        </ul>
        <div className="pt-40">
          <p className="uppercase text-center tracking-widest text-secondary pb-4">
            Let's connect
          </p>
          <ul className="text-secondary flex flex-wrap justify-around">
            {socialsList.map((iconItem, index) => (
              <li
                key={iconItem.icon + index}
                className="m-2 flex items-center justify-center p-4 button-rounded"
              >
                <iconItem.icon size={25} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
    <div
      onClick={() => updateIsMenuOpen(false)}
      className={clsx(
        isMenuOpen ? 'fixed' : 'hidden',
        'md:hidden left-0 top-0 w-full transition-all duration-500 h-screen bg-black/70 z-30'
      )}
    ></div>
  </>
);

export default SideMenu;
