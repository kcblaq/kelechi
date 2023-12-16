// import { motion } from 'framer-motion';
import './App.css';
import { BasicClasses } from './styles/BasicStyles';
import { IoLogoAmplify } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { VscFilePdf } from "react-icons/vsc";
import { IoCheckbox } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandMongodb } from "react-icons/tb";
import { PiFigmaLogoLight } from "react-icons/pi";
import { SiPostgresql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";









// import { IoLogoJavascript } from "react-icons/io";


import Welcome from './components/Welcome';
import { useState } from 'react';
import PXPharama from './components/projects/PX-Pharama';
import Shortchase from './components/projects/Shortchase';
import Oobla from './components/projects/Oobla';
import GlobalReformation from './components/projects/GlobalReformation';
import KAD from './components/KAD';
import Kejepay from './components/projects/Kejepay';

function App() {
const [current, setCurrent] = useState('Welcome');

  // const bgImage = 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg';
  // const image2 = 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  
  const projects = [{name:'Shortchase', link: 'https://shortchaseclient.netlify.app/'}, {name:'Kejepay', link:'https://kele.netlify.app/'}, 
  // 'Oobla', 
  // 'PX Pharma', 
  {name:'GlobalReformation', link: 'https://globalreformationnetwork.org/'}]
  const toolset = [{name:'Javascript', icon: <TbBrandJavascript/>}, {name:'ReactJS', icon: <FaReact/>},{name:'ExpressJS', icon: <SiExpress/>}, {name:'ReactNative', icon: <TbBrandReactNative/>},{name:'MongoDB', icon: <TbBrandMongodb/>}, {name:'Figma', icon: <PiFigmaLogoLight/>}, {name:'Postgress', icon: <SiPostgresql/>}, {name:'Prisma', icon: <SiPrisma/>}]

  // const proficiency = ['OOP', 'UX Search', 'UI Designs', 'Frontend', 'DBMS', 'Backend', 'Docker', 'Mobile App']

  return (
    <section
      className={`relative flex w-full bg-[#0B0C10]  h-screen flex-col no-scrollbar scrollbar-none overflow-y-scroll text-[#C5C6C7] no-scrollbar`}
     
    >
      {/* <div className="overlay"></div> */}

      <div className="flex w-full justify-between items-center p-3 md:p-8">
        <span className='md:text-6xl text-3xl  cursor-pointer transform transition-transform duration-300 hover:scale-125 '>
          <IoLogoAmplify />
        </span>
        <span className='md:text-3xl flex gap-5 text-base items-center '>
          <FaGithub className="cursor-pointer  transform transition-transform duration-300 hover:scale-125" onClick={()=> window.location.reload()} />
          <TfiEmail className="cursor-pointer transform transition-transform duration-300 hover:scale-125" />
          <VscFilePdf className="cursor-pointer transform transition-transform duration-300 hover:scale-125" />
        </span>
      </div>

      <div className="flex flex-col md:flex-row  w-full justify-between items-center">
        <div className='flex w-full md:w-2/3 h-full'>
        {
          current == 'Welcome' ? <Welcome/>
          : current == 'Shortchase' ? <Shortchase url='https://shortchaseclient.netlify.app/'/>
          : current =='Kejepay'? <Kejepay url='https://kejepay.com.ng/' />
          : current == 'Oobla'? <Oobla/>
          : current == 'PX Pharma'? <PXPharama />
          : current == 'GlobalReformation'? <GlobalReformation url='https://globalreformationnetwork.org/'/>
          : current == 'KAD'? <KAD/>
          : null
        }
        </div>
        <div className={`flex flex-col w-full md:w-1/3 h-full items-start md:p-8 p-3 text-${BasicClasses.primary}`}>
        <h1 className=' font-bold text-3xl flex items-center gap-2'> Projects<IoCheckbox/> </h1>
        <div className="flex flex-wrap gap-2">
        {
          projects.map((project) => <p className={`${current === project.name && 'text-[#66FCF1] border-[#66FCF1]' } border transform transition-transform duration-300 hover:scale-110 font-bold cursor-pointer text-center mt-4 p-2 py-1 shadow-lg rounded-3xl  hover:text-[#66FCF1] hover:border-[#66FCF1]`} onClick={()=> setCurrent(project.name)}>{project.name} </p> )
        }
        </div>

        {/* <h1 className=' font-bold text-3xl flex items-center gap-1 mt-4'> Proficiency: </h1>
        <div className="flex flex-wrap text-2xl gap-2">
        {
          proficiency.map((project) => <p className={`  font-bold flex items-center text-center mt-4 py-1 shadow-lg`}><RiCheckboxBlankFill/> {project} </p> )
        }
        
        </div> */}
        <h1 className=' font-bold text-3xl flex items-center gap-1 mt-4'>Toolset: </h1>
        <div className="flex flex-wrap gap-2">
        {
          toolset.map((project) => <p className={`border flex items-center font-bold text-center mt-4 p-2 py-1 shadow-lg `}>{project.icon} {project.name} </p> )
        }
        
        </div>
        
        </div>
      </div>
    </section>
  );
}

export default App;
