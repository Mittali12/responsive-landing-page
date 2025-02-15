'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi'; // Hamburger and Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarList = [
    { name: 'Home', hasArrow: false },
    { name: 'Who We are', hasArrow: true },
    { name: 'R&D', hasArrow: true },
    { name: 'Products', hasArrow: true },
    { name: 'Media', hasArrow: true },
    { name: 'Careers', hasArrow: true },
    { name: 'Contact', hasArrow: false }
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#65656580]/50 backdrop-blur-md shadow-md z-50 flex justify-between items-center px-6 py-3 w-[90%] max-w-[1100px] rounded-full lg:w-[80%]">
      
      {/* Logo */}
      <Image src="/images/logo.png" width={150} height={35} alt="logo" className="md:w-[180px]" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 items-center">
        {navbarList.map((item, index) => (
          <li key={index} className="text-white font-semibold text-sm flex items-center gap-1 cursor-pointer">
            <span>{item.name}</span>
            {item.hasArrow && (
              <Image src="/images/rightArrow.png" width={6} height={5} alt="arrow" />
            )}
          </li>
        ))}

        {/* Search Icon */}
        <li>
          <Image src="/images/search.png" width={18} height={18} alt="search" />
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[#656565]/80 backdrop-blur-md shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          {navbarList.map((item, index) => (
            <li key={index} className="text-white font-semibold text-lg cursor-pointer">
              {item.name}
            </li>
          ))}
          <li>
            <Image src="/images/search.png" width={22} height={22} alt="search" />
          </li>
        </ul>
      )}
      
    </nav>
  );
};

export default Navbar;
