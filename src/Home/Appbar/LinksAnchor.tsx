import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type props = {
  name:string;
  selectedpage:string;
  setselectedpage:(value:string)=>void;
}


const LinksAnchor = ({name,selectedpage,setselectedpage}:props) => {
    const lowercasepagename= name.toLowerCase().replace(/ /g,"");
    const displayselection = ()=>{
      if(selectedpage === lowercasepagename){
        return "text-indigo-600 hover:text-indigo-600 duration-500"
      }
      return "text-white hover:text-indigo-600 duration-500"
    }
  return (
    <AnchorLink 
    className={displayselection()} 
    onClick={()=>setselectedpage(lowercasepagename)} 
    href={`#${lowercasepagename}`} >
       {name}
    </AnchorLink>
  )
}

export default LinksAnchor