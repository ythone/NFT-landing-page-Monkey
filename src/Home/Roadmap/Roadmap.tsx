import React from 'react'
import useMediaQuery from '../../Hooks/useMediaQuery';
import { content_itineraire } from './ContentItineraire';

type props = {
    setselectedpage: (value: string) => void;
}


const Roadmap = ({ setselectedpage }: props) => {
    const isAboveMediumScreen = useMediaQuery('(min-width: 768px)');

    const timelinedetail = () => {
      if(isAboveMediumScreen){
        return <>
        {content_itineraire.map(itiner => {
            return (
                <div key={itiner.id} className='grid grid-cols-2  pb-30'>
                    <h3 className="md:text-xl text-4xl text-right mr-10 font-semibold text-white dark:text-white">{itiner.textleft}</h3>
                    <ol className='relative border-l border-[#581dca] dark:border-gray-700'>
                    <li className="ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-base font-semibold leading-none text-white dark:text-gray-500">{itiner.textright1}</time><br></br>
                        <p className="text-base font-semibold text-white dark:text-white mt-5">{itiner.textright2}</p>
                        <p className="mb-4 text-base font-semibold text-white dark:text-gray-400 mt-5 mb-15">{itiner.textright3}</p>
                    </li>
                    </ol>
                </div>
            );
        })}
    </>
      }
        return <>
            {content_itineraire.map(itiner => {
                return (
                    <div key={itiner.id} className='grid grid-cols-2  pb-30'>
                        <h3 className="text-xl text-right mr-10 font-semibold text-white dark:text-white">{itiner.textleft}</h3>
                        <ol className='relative border-l border-[#581dca] dark:border-gray-700'>
                        <li className="ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-base font-semibold leading-none text-white dark:text-gray-500">{itiner.textright1}</time><br></br>
                            <p className="text-base font-semibold text-white dark:text-white mt-5">{itiner.textright2}</p>
                            <p className="mb-4 text-base font-semibold text-white dark:text-gray-400 mt-5 mb-15">{itiner.textright3}</p>
                        </li>
                        </ol>
                    </div>
                );
            })}
        </>
    }

    const timelineleft = () => {
        return (
            <div>
                {content_itineraire.map(itiner => {
                    return (
                        <h3 className="text-lg text-right mr-5 font-semibold text-bold-black dark:text-white">{itiner.textleft}</h3>
                    );
                })}
            </div>
        )
    }


    return (
        <section id='roadmap' className='mx-auto min-h-full w-5/6 py-20'>
            <h1 className='flex items-center justify-center text-[#f19762] font-bold text-4xl'>Roadmap</h1>
            <div className='mt-10'>
            {timelinedetail()}
            </div>

        </section>
    )
}

export default Roadmap