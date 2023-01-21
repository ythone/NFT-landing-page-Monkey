
import React from 'react'
import Slider from 'react-slick';
import SimpleSlider from './Carousel_text';

type props = {
    setselectedpage: (value: string) => void;
}

const About = ({ setselectedpage }: props) => {

    return (
        <section id="about" className='mx-auto min-h-full w-5/6 py-20'>
            <div>
                {/*Header*/}
                <div className='text-center'>
                    <h1 className='basis-3/5 text-3xl text-white font-bold'>About the <span className='text-[#f19762]'>collection</span></h1>
                    <p className='text-white text-xl mt-8'>The monster Ape Club is a collection of 7.9999 Monster Ape NFTs inspired by new wealthy generation
                        of crypto-currency and NFTs.</p>

                    <p className='text-white text-xl mt-8'>Each NFT is a unique 3D artwork generated from the collection of more than 200+ traits.The objective is to build the strongest community and project around NFTs.</p>
                    <button className='bg-[#581dca] text-white font-[Poppins] py-2 px-6 rounded-md mt-4 hover:bg-indigo-400 
    duration-500'>
                        Learn more
                    </button>
                </div>

                {/*Benefit section about*/}
                <div className='md:flex items-center justify-between gap-8 mt-5'>
                <SimpleSlider/>
                </div>
            </div>
        </section>
    )
}

export default About