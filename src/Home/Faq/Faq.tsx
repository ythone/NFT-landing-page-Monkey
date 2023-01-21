import React from 'react'
import Question from './question'
import useMediaQuery from '../../Hooks/useMediaQuery';

type props = {
    setselectedpage: (value: string) => void;
}


const Faq = ({ setselectedpage }: props) => {
    const isAboveMediumScreen = useMediaQuery('(min-width: 768px)');
    if(isAboveMediumScreen){
        return (
            <section id='faq' className='md:flex mx-auto w-6/6 items-center justify-center bg-[#0b0c17] min-h-full'>
                <div className='grid grid-cols-2  pb-30 mt-10 px-20'>
                    <div className='p-10'>
                        <h1 className='text-[#f19762] font-semibold'>FAQ NFT</h1>
                        <p className='text-white font-bold  text-3xl'>Prime Ape Planet</p>
                        <p className='text-white'>What do you want to know about bored Ape just tell us through a question we will happy to give answer</p>
                    </div>
                    <div className='p-5'>
                        <div className='mb-3'>
                            <Question
                                questions='When will the official prime planet launch take place?'
                                answer='The official prime planet will the 6th of this month so be ready!'
                            />
                        </div>
                        <div className='mb-3'>
                            <Question
                                questions='How can I join you?'
                                answer='Buy an Ape that correspond you to be in the circle.'
                            />
                        </div>
                        <div className='mb-3'>
                            <Question
                                questions='Will prime Ape planet make a found investment?'
                                answer='Yes in the near future things will go that way but before that make sure to be a memeber.'
                            />
                        </div>
                        <div className='mb-3'>
                            <Question
                                questions='How many prime apes are taking over the digital jungle?'
                                answer='About 400 primes apes will take over the digital jungle.'
                            />
                        </div>
                        <div className='mb-3'>
                            <Question
                                questions='Can I take a sneak peek at my NFTS?'
                                answer="Yes you can it's your apes after all!"
                            />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    return (
        <section id='faq' className='md:flex mx-auto w-6/6 items-center justify-center bg-[#0b0c17] min-h-full'>
            <div className='pb-30 mt-10 px-20'>
                <div className='p-10'>
                    <h1 className='text-[#f19762] font-semibold'>FAQ NFT</h1>
                    <p className='text-white font-bold  text-3xl'>Prime Ape Planet</p>
                    <p className='text-white'>What do you want to know about bored Ape just tell us through a question we will happy to give answer</p>
                </div>
                <div className='p-5'>
                    <div className='mb-3'>
                        <Question
                            questions='When will the official prime planet launch take place?'
                            answer='The official prime planet will the 6th of this month so be ready!'
                        />
                    </div>
                    <div className='mb-3'>
                        <Question
                            questions='How can I join you?'
                            answer='Buy an Ape that correspond you to be in the circle.'
                        />
                    </div>
                    <div className='mb-3'>
                        <Question
                            questions='Will prime Ape planet make a found investment?'
                            answer='Yes in the near future things will go that way but before that make sure to be a memeber.'
                        />
                    </div>
                    <div className='mb-3'>
                        <Question
                            questions='How many prime apes are taking over the digital jungle?'
                            answer='About 400 primes apes will take over the digital jungle.'
                        />
                    </div>
                    <div className='mb-3'>
                        <Question
                            questions='Can I take a sneak peek at my NFTS?'
                            answer="Yes you can it's your apes after all!"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq