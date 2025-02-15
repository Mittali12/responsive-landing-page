import Image from 'next/image';
import React from 'react';

const CardsPage = () => {
    const cardsData = [
        [
            {
                image: '/images/CardImage.jpg',
                heading: 'Organization',
                content: 'Naturalis Organic operates with cutting-edge facilities, adhering to international standards, with diverse business units and factors ensuring quality and sustainability.',
                buttonText: 'LEARN MORE'
            },
            {
                image: '/images/CardImage1.jpg',
                heading: 'Management',
                content: 'Our dedicated team, comprising experienced professionals, drives innovation and excellence across all facets of our operations and strategic initiatives.',
                buttonText: 'EXPLORE NOW'
            }
        ],
        [
            {
                image: '/images/CardImage2.jpg',
                heading: 'Research & Development',
                content: 'NOP Research Centre, a hub of innovation, pioneers breakthrough solutions in specialty ingredients, leveraging state-of-the-art facilities and top-tier scientific expertise.',
                buttonText: 'Learn More'
            },
            {
                image: '/images/CardImage3.jpg',
                heading: 'Investors',
                content: 'We prioritize transparency and accountability, offering investors insights into our performance, growth strategies, and commitment to long-term value creation.',
                buttonText: 'READ MORE'
            }
        ],
        [
            {
                image: '/images/CardImage4.jpg',
                heading: 'Sustainability',
                content: 'Commitment to eco-friendly practices for a greener, sustainable future.',
                buttonText: 'LEARN MORE'
            },
            {
                image: '/images/CardImage5.jpg',
                heading: 'Corporate Social Responsibility',
                content: 'Engage in community initiatives to uplift lives, empower education, and foster sustainable development for a brighter tomorrow.',
                buttonText: 'Explore Now'
            }
        ]
    ];

    const bgColors = ['bg-white', 'bg-[#EDF0FF]', 'bg-white'];

    return (
        <div>
            {cardsData.map((group, groupIndex) => (
                <div
                    key={groupIndex}
                    className={`grid grid-cols-1 md:grid-cols-2 items-center xl:p-20 p-10 gap-6 ${bgColors[groupIndex % bgColors.length]}`}
                >
                    {group.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col md:flex-row xl:gap-8 md:gap-4 p-4 rounded-2xl border overflow-hidden group 
                            md:h-[319px] transition-all duration-1000 ease-in-out"
                        >

                            <div className="relative z-10 w-full md:w-2/3 transition-all duration-[2000ms] ease-in-out text-center md:text-left">
                                <h3 className="text-2xl font-semibold transition-all duration-[2000ms] ease-in-out 
                                group-hover:text-[#d6d6d6] 
                               
                               ">
                                    {item.heading}
                                </h3>
                                <p className="mt-5 xl:text-base text-xs  font-normal text-[#5E5E5E] transition-all duration-[2000ms] ease-in-out 
                                group-hover:text-[#e5e5e5] 
                              ">
                                    {item.content}
                                </p>
                                <button className="md:absolute md:bottom-6  bottom-3 px-3 py-2 border border-black font-semibold rounded xl:text-sm text-xs transition-all duration-[2000ms] ease-in-out mt-4  md:mt-5 xl:m-0
                                group-hover:bg-red-800 
                               
                                group-hover:border-[#ff9999] 
                               
                                group-hover:text-[#fefefe] 
                                group-hover:delay-200 hover:group-hover:text-white 
                                group-hover:scale-105">
                                    {item.buttonText}
                                </button>
                            </div>


                            <div className="relative md:absolute md:top-0 md:right-0 w-full xl:w-[174px] h-[250px] xl:h-[300px] md:w-[120px] md:h-[300px]
                            transition-all duration-[2000ms] ease-in-out p-4 
                            group-hover:w-full group-hover:h-full group-hover:p-0 my-auto">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt='card-image'
                                        fill
                                        className="object-cover rounded-[64px] transition-all duration-[3000ms] 
                                        ease-[cubic-bezier(0.25, 1, 0.3, 1.2)] 
                                        group-hover:scale-110 
                                        group-hover:rounded-[48px] 
                                         group-hover:brightness-[0.3] 
                                        group-hover:transition-all 
                                        group-hover:duration-[2000ms] 
                                        group-hover:delay-200"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CardsPage;
