import Image from 'next/image';
import React from 'react';

const CardsSection = () => {
    const cardsData = [
        {
            image: '/images/Shape.png',  
            heading: 'Our Vision',
            content: 'To be an outstanding research based Global Specialty and Fine Chemicals Company Committed to building strong relationship with our customers, our employees and shareholders. The motto for our growth is innovative technology, uncompromising quality of products and excellence in service.'
        },
        {
            image: '/images/Shape1.png',  
            heading: 'Our Mission',
            content: 'To manufacture and provide superior quality Specialty and Fine Chemicals, active pharmaceutical and cosmceutical ingredients to all our valued customers from the personal care and pharmaceutical industries.'
        },
        {
            image: '/images/Shape2.png',  
            heading: 'Value',
            content: 'Passion for excellence, customer focus, teamwork, embracing change, delivering on commitments, and sustainability form the core of our organizational values, guiding our actions and decisions every day'
        },
        {
            image: '/images/Shape3.png',  
            heading: 'Goals & Objective',
            content: 'Our goal is to continuously innovate and excel in the development and supply of specialty ingredients, while fostering sustainable growth, enhancing customer value, and maintaining leadership in the industry.'
        }
    ];

    return (
        <div className="w-full  bg-[url('/images/background.png')] bg-cover bg-center grid xl:grid-cols-4 xl:p-20 p-10  md:grid-cols-2 grid-cols-1 xl:gap-4 gap-4">
            {cardsData.map((card, index) => (
                <div key={index} className='border-white border rounded-2xl p-6 bg-white/20 backdrop-blur-2xl'>
                    <div className='bg-white p-2 rounded-lg w-fit'>
                        <Image src={card.image}  width={32} height={32} alt={card.heading} />
                    </div>
                    <h3 className='mt-5 font-semibold text-white xl:text-2xl text-xl'>{card.heading}</h3>
                    <p className='mt-5 xl:text-base text-xs font-normal text-white'>{card.content}</p>
                </div>
            ))}
        </div>
    );
};

export default CardsSection;
