'use client';

import { navlinks } from '@/constant/constant';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { usePathname } from 'next/navigation';

type Props = {
  openNav?: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Jika bukan home, langsung biru
  const navClass = isHome
    ? (navBg ? 'bg-blue-950 shadow-md fixed' : 'fixed')
    : 'bg-blue-950 shadow-md';

  return (
    <div
      className={`${navClass} transition-all duration-200 h-[12vh] z-[1000] w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-20 h-20 bg-[#f5e9dc] rounded-full flex items-center justify-center flex-col">
            <Image
              src="/images/logo.png"
              alt="KelanaCrew Logo"
              width={120}
              height={120}
            />
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-10">
          {navlinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:origin-right">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="hidden lg:block px-6 py-2 text-sm md:px-12 md:py-2.5 md:text-base text-black bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg"
          >
            Book Now
          </button>
          {/* Burger */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;