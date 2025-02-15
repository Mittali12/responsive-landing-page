import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import React from 'react'

const Footer = () => {
  const footerData = [
    {
      heading: 'Departments',
      list: [
        'Global Presence', 'Research & Development', 'Manufacturing Units', 'Careers At Naturalis', 'Sustainability'
      ]
    },
    {
      heading: 'Quick Links',
      list: [
        'Blogs', 'Certifications', 'Recent News', 'Policies', 'Investors'
      ]
    },
    {
      heading: 'Contact',
      list: [
        'Naturalis Organic Products',
        '5D, 17th Cross, 7th Block, Near Jayadeva Hospital, BTM Layout, Bengaluru, Karnataka, India. – 560070',
        '+91-9876543332, +91 8975458903',
        'nop@naturalis.net'
      ]
    }
  ];

  return (
    <div className="relative w-full min-h-[500px] bg-[radial-gradient(closest-corner_at_50%_50%,#151515_30%,#1D1E35_100%)] xl:p-20 p-10 overflow-hidden">


      <div className="absolute top-0 right-0 transform -translate-y-[140px] opacity-50">
        <Image
          src="/images/footer.gif"
          alt="layers"
          height={800}
          width={548}
          className="object-cover"
        />
      </div>

      <div className="grid xl:grid-cols-4 grid-cols-2  gap-8 text-white container mx-auto">


        <div>
          <Image src="/images/logo.png" width={170} height={50} alt="logo" />
          <h3 className="font-semibold xl:text-xl  text-lg mt-4">About Us</h3>
          <p className="xl:text-sm text-xs font-normal max-w-md">
            Naturalis Organic Products Limited is a leading specialty ingredient manufacturing company dedicated to innovation, quality, and sustainability.
          </p>
        </div>


        {footerData.map((data, index) => (
          <div key={index}>
            <h4 className="font-semibold xl:text-xl text-lg mb-3">{data.heading}</h4>
            <ul className="list-none space-y-3">
              {data.list.map((listItem, idx) => (
                <li key={idx} className="xl:text-sm text-xs font-normal">{listItem}</li>
              ))}
              {index === 2 && <div className='flex mt-8 gap-3'>
                <div className='p-3 rounded bg-[#E41F28] cursor-pointer'><FaLinkedin color='white' size={18} /></div>
                <div className='p-3 rounded bg-[#E41F28] cursor-pointer'><FaFacebook color='white' size={18} /></div>
                <div className='p-3 rounded bg-[#E41F28] cursor-pointer'><FaInstagramSquare color='white' size={18}/></div>
                <div className='p-3 rounded bg-[#E41F28] cursor-pointer'><BsTwitterX color='white' size={18} /></div>
              </div>
              }
            </ul>
          </div>
        ))}

      </div>
      <p className='xl:absolute bottom-4 left-1/3 right-1/3 text-center text-white text-sm mt-5'>© 2024 Naturalis Organic Products Limited </p>
    </div>
  );
};

export default Footer;
