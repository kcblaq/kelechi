// import { motion } from 'framer-motion';
import './App.css';
import { BasicClasses } from './styles/BasicStyles';
import { IoLogoAmplify } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { VscFilePdf } from "react-icons/vsc";


import Welcome from './components/Welcome';

function App() {
  const bgImage = 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg';
  // const image2 = 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  
  const projects = ['Shortchase', 'Mimotar', 'Oobla', 'PZ', 'GlobalReformation', 'KAD']

  return (
    <section
      className={`relative flex w-full bg-gradient-to-bl from-black to-${BasicClasses.pink} h-screen flex-col no-scrollbar scrollbar-none overflow-y-scroll bg-${BasicClasses.dark} no-scrollbar`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="overlay"></div>

      <div className="flex w-full justify-between items-center p-8">
        <span className='text-6xl cursor-pointer transform transition-transform duration-300 hover:scale-125 '>
          <IoLogoAmplify />
        </span>
        <span className='md:text-3xl flex gap-5 text-base items-center '>
          <FaGithub className="cursor-pointer  transform transition-transform duration-300 hover:scale-125" />
          <TfiEmail className="cursor-pointer transform transition-transform duration-300 hover:scale-125" />
          <VscFilePdf className="cursor-pointer transform transition-transform duration-300 hover:scale-125" />
        </span>
      </div>

      <div className="flex mt-3 w-full justify-between items-center">
        <div className='flex h-full'>
          <div className='h-full bg-green-500'></div>
        <Welcome/>
        </div>
        <div className={`grid w-1/3 h-full items-start p-8 text-${BasicClasses.primary}`}>
        <h1 className=' font-bold text-6xl'> Projects. </h1>
        {
          projects.map((project) => <p className={`font-semibold bg-black cursor-pointer text-[#66FCF1] text-center mt-4 p-2 shadow-lg rounded-3xl`}>{project} </p> )
        }
        
        </div>
      </div>
    </section>
  );
}

export default App;
