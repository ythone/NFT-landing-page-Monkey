import React from 'react'
import useMediaQuery from '../../Hooks/useMediaQuery';

type props = {
    setselectedpage: (value: string) => void;
}


const Home = ({ setselectedpage }: props) => {
    const isAboveMediumScreen = useMediaQuery('(min-width: 768px)');
    return (
        <section id='home' className='gap-16 mt-20 bg-[#171821] py-10 md:w-full md:pb-0'>
            {/*section*/}
            <div className='md:flex mx-auto w-5/6 items-center justify-center'>
                {/*text or text image */}
                <div className='z-10 mt-32 md:mt-16 md:basis-4/5'>
                    {/* heading */}
                    <div className=''>
                        <div className=''>
                            <h1 className='text-white font-bold text-6xl'>Adventure NFT</h1>
                            <h2 className='text-[#f19762] font-bold text-6xl'>Collection</h2>
                        </div>
                        <p className='text-white mr-10 mt-8 text-2sm'>
                            Object can be anywhere but illustrate in way unimaginable can drive your emotion
                            Buy and sell your NFTs on our marketplace or try out an English or a Dutch Auction.
                        </p>
                    </div>
                    {/*action*/}
                    <div className='mt-8 flex items-center'>
                        <button className='bg-[#581dca] text-white font-[Poppins] py-2 px-6 rounded-md hover:bg-indigo-400 duration-500'>
                            Buy on opensea
                        </button>
                    </div>
                </div>
                {/*animation or image */}
                <div className=''>
                    <img className='rounded-lg' src="https://freecoins24.io/wp-content/uploads/2022/01/Kryxivia-x-MontersApe-10-MonstrApe-Giveaway-e1643133071360.jpg" />
                </div>
            </div>

        </section>
    )
}

export default Home