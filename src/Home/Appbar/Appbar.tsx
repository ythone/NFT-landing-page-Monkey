import React, { useState } from 'react'
import Buttons from './Buttons';
import LinksAnchor from './LinksAnchor';
import useMediaQuery from '../../Hooks/useMediaQuery';

type props = {
  Links: any[];
  selectedpage: string;
  isTopOfPage: boolean;
  setselectedpage: (value: string) => void;
}


const Appbar = ({ isTopOfPage, Links, selectedpage, setselectedpage }: props) => {
  let [open, setOpen] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 768px)');
  const navbarbackground = isTopOfPage ? "" : "bg-red-400 drop shadow";
  const displayulmenu = () => {
    console.log(isAboveMediumScreens);
    if (isAboveMediumScreens == true) {
      return (
        <ul className={`flex items-center md:pb-0 pb-12 static z-[-1] left-0 w-auto pl-9`}>
          {
            Links.map((link) => (
              <li key={link.name} className='ml-8 text-xl my-7'>
                <LinksAnchor
                  selectedpage={selectedpage}
                  setselectedpage={setselectedpage}
                  name={link.name} />
              </li>
            ))
          }
          <Buttons />
        </ul>
      )
    }
    return <div></div>
  }
  const modalMobileMenu = () => {
    if (isAboveMediumScreens == false) {
      if (open == false) {
        return <div className={`${navbarbackground} fixed right-0 bottom-0 z-40 h-full w-[300px] bg-[#180e22] drop-shadow-xl`}>
          <div className='flex justify-end p-12'>
            <button onClick={() => setOpen(!open)}>
              <span className='text-3xl text-white'>
                <ion-icon name='close'></ion-icon>
              </span>
            </button>
          </div>
          <ul className='ml-[33%] flex flex-col gap-2 text-sm'>
            {
              Links.map((link) => (
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-4'>
                  <LinksAnchor
                    selectedpage={selectedpage}
                    setselectedpage={setselectedpage}
                    name={link.name} />
                </li>
              ))
            }
          </ul>
        </div>
      }
    } else {
      return <div></div>
    }
  }
  return (
    <div className='w-full bg-[#171821] fixed top-0 z-50'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-white'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name="logo-reddit"></ion-icon>
          </span>
          NFT-Collector
        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <span className='text-3xl text-white'>
            <ion-icon name='menu'></ion-icon>
          </span>
        </div>
        <ul className='flex items-center md:pb-0 pb-12 static z-[-1] left-0 w-auto pl-9'>
          {
            Links.map((link) => (
              <li key={link.name} className='ml-8 text-xl my-7'>
                <LinksAnchor
                  selectedpage={selectedpage}
                  setselectedpage={setselectedpage}
                  name={link.name} />
              </li>
            ))
          }
    <button className='bg-[#581dca] text-white font-[Poppins] py-2 px-6 rounded-full md:ml-8 hover:bg-indigo-400 
    duration-500'>
      Connect
    </button>
        </ul>
      </div>
      {/*Mobile menu modal*/}
      {modalMobileMenu()}
    </div>
  )
}

export default Appbar