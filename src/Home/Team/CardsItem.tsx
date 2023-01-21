import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

type props={
  icon:JSX.Element;
  title:string;
  description:string;
  setselectedpage:(value:string)=>void
};


const CardsItem = ({icon,title,description,setselectedpage}:props) => {
  return (
    <div className='mt-5 rounded-md border-2 border-[#282239] px-5 py-16 text-center text-white'>
      <div className='mb-4 flex justify-center'>
      <div className="flex items-center justify-center h-20 w-20 bg-[#9c43a5] rounded-full">
            <img
              className="h-10 w-10"
              src="https://cdn-icons-png.flaticon.com/512/8944/8944714.png"
              alt=""
            />
          </div>
      </div>
      <h4 className='font-bold text-xl'>{title}</h4>
      <p className='py-3 text-sm'>{description}</p>
      <div className='text-3xl flex items-center justify-evenly mt-5'>
      <ion-icon name='logo-twitter'></ion-icon>
      <ion-icon name='logo-discord'></ion-icon>
      <ion-icon name='logo-instagram'></ion-icon>
      </div>
    </div>
  )
}

export default CardsItem