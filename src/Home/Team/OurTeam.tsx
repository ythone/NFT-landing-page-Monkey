import React from 'react'
import CardsItem from './CardsItem';
import { IoLogoReddit } from 'react-icons/io5';


type props = {
    setselectedpage: (value: string) => void;
}


const OurTeam = ({ setselectedpage }: props) => {

    const cardcontent: Array<any> = [
        {
          icon:<IoLogoReddit/>,
          title: "Ronda Ruth",
          description:
            "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
        },
        {
          icon:<IoLogoReddit/>,
          title: "Adam Chicka",
          description:
            "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
        },
        {
          icon:<IoLogoReddit/>,
          title: "Tobey Garfand",
          description:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
        },
      ];

    return (
        <section id='team' className='mx-auto min-h-full w-5/6 py-20'>
            <h1 className='flex items-center justify-center text-[#f19762] font-bold text-4xl'>Our team</h1>
            <div className='mt-10 md:flex items-center justify-between gap-8'>
            {cardcontent.map((team) => (
            <CardsItem
              key={team.title}
              icon={team.icon}
              title={team.title}
              description={team.description}
              setselectedpage={setselectedpage}
            />
          ))}
            </div>
        </section>
    )
}

export default OurTeam