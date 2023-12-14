import { motion } from 'framer-motion';
import './App.css';
import { BasicClasses } from './styles/BasicStyles';
import { IoLogoAmplify } from "react-icons/io5";
import { GrGithub } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
function App() {
  const bgImage = "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg";

  return (
    <section className={`flex w-full bg-gradient-to-bl from-black to-[${BasicClasses.pink}]  h-screen flex-col no-scrollbar scrollbar-none overflow-y-scroll bg-[${BasicClasses.dark}] opacity-20 no-scrollbar `} 
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover'
    }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className='  w-screen h-screen absolute'>
        <motion.div className={`absolute bg-gradient-to-bl rounded-br-full to-black h-6 w-6 pl-10 from-${BasicClasses.primary}`}>
        </motion.div>
      </motion.div>

      < div className=' flex w-full justify-between items-center p-8 '>
        <span className='text-6xl cursor-pointer hover:scale-75'> <IoLogoAmplify /></span>
        <span className='md:text-3xl flex gap-4 text-base items-center '> 
        <GrGithub className="cursor-pointer"  />
        <TfiEmail className="cursor-pointer" /> </span>
      </div>
    </section>
  );
}

export default App;
