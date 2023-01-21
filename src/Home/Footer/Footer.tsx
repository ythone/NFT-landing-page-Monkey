import React from 'react'
import useMediaQuery from '../../Hooks/useMediaQuery';
import { IoLogoReddit } from 'react-icons/io5';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaDiscord} from "react-icons/fa";

const Footer = () => {
    const isAboveMediumScreen = useMediaQuery('(min-width: 768px)');

    if(isAboveMediumScreen){
        return (
            <footer className='w-5/6 mx-auto items-center justify-center'>
                <div className='flex items-center justify-between mt-10 mb-10'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-white'>
                        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                            <IoLogoReddit/>
                        </span>
                        NFT-Collector
                    </div>
                    <button className='bg-[#581dca] text-white font-[Poppins] py-2 px-6 rounded-md hover:bg-indigo-400 duration-500'>
                        Join our discord
                    </button>
                    <div className='text-3xl text-white flex items-center justify-evenly mt-5'>
                        <AiOutlineTwitter/>
                        <FaDiscord/>
                        <AiOutlineInstagram/>
                    </div>
                </div>
                <div className='text-white font-semibold text-center pb-2'>
                    <hr className='border-[#282239]'/>
                    2023 Copyright Digital
                </div>
            </footer>
        )
    }
    return (
        <footer className='w-5/6 mx-auto items-center justify-center'>
            <div className='flex items-center justify-between mt-10 mb-10'>
                <div className='font-bold text-xl cursor-pointer flex items-center font-[poppins] text-white'>
                    <span className='text-xl text-indigo-600 mr-1 pt-2'>
                      <IoLogoReddit/>
                    </span>
                    NFT-Collector
                </div>
                 <div className='px-3'>
                 <button className='bg-[#581dca] text-white font-[Poppins] py-2 px-6 rounded-md hover:bg-indigo-400 duration-500'>
                    Join our discord
                </button>
                 </div>
                <div className='text-xl text-white flex items-center justify-evenly mt-5'>
                        <AiOutlineTwitter/>
                        <FaDiscord/>
                        <AiOutlineInstagram/>
                </div>
            </div>
            <div className='text-white font-semibold text-center pb-2'>
                <hr className='border-[#282239]'/>
                2023 Copyright Digital
            </div>
        </footer>
    )
}

export default Footer