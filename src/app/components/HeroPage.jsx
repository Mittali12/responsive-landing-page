import React from 'react'
import Image from "next/image";
import Navbar from './Navbar';

const HeroPage = () => {
    return (
        <div className="relative w-full bg-[radial-gradient(closest-corner_at_50%_50%,#151515_30%,#1D1E35_100%)] text-center xl:py-40 xl:px-20 px-10 py-20">
           <div className="absolute  top-0 right-0 opacity-10">
                <Image src="/images/bubble.gif" alt="Bubble" width={250} height={350} />
            </div>


            <div className="absolute bottom-0 left-0 opacity-10 rotate-180">
                <Image src="/images/bubble.gif" alt="Bubble" width={250} height={350} />
            </div>
            <h3 className="font-semibold text-white xl:text-4xl text-2xl">About Naturalis Organic</h3>
            <p className="text-white xl:text-xl text-sm font-semibold mt-6">Naturalis Organic Products Limited, established in 1991, is a renowned name in the specialty ingredient industry. With over three decades of experience, we have become a trusted provider of high-quality ingredients for various sectors, including hair care, skin care, sun care, paints and coatings, and food and healthcare. Our journey began with a vision to revolutionize the industry through innovation and excellence. Over the years, we have relentlessly pursued this vision, constantly evolving to meet the ever-changing needs of our customers worldwide. Today, Naturalis Organic boasts a wide range of 50 products manufactured at our state-of-the-art facilities in India.</p>
        </div>
    )
}

export default HeroPage