import React, { useEffect, useState } from 'react'
import Appbar from './Appbar/Appbar'
import Home from './Home/Home';
import About from './About/About';
import Roadmap from './Roadmap/Roadmap';
import OurTeam from './Team/OurTeam';
import Faq from './Faq/Faq';
import Footer from './Footer/Footer';

const Homepage = () => {
  let [selectedpage,setselectedpage]=useState("home");
  let Links =[
    {name:"Home",link:"/"},
    {name:"About",link:"/"},
    {name:"Roadmap",link:"/"},
    {name:"Team",link:"/"},
    {name:"Faq",link:"/"}
  ];
  const [isTopOfPage,setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handlesroll = ()=>{
      if(window.screenY === 0){
        setIsTopOfPage(true);
        setselectedpage("home");
      }
      if(window.screenY !== 0){
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll",handlesroll);
    return ()=> window.removeEventListener("scroll",handlesroll);
  },[]);
  
  return (
    <div className='bg-[#171821]'>
    <Appbar isTopOfPage={isTopOfPage} selectedpage={selectedpage} setselectedpage={setselectedpage} Links={Links} />
    <Home setselectedpage={setselectedpage} />
    <About setselectedpage={setselectedpage} />
    <Roadmap setselectedpage={setselectedpage} />
    <OurTeam setselectedpage={setselectedpage}/>
    <Faq setselectedpage={setselectedpage}/>
    <Footer/>
    </div>
  )
}

export default Homepage