// import { motion } from 'framer-motion';
import './App.css';
import { BasicClasses } from './styles/BasicStyles';
import { IoLogoAmplify } from 'react-icons/io5';
import { GrGithub } from 'react-icons/gr';
import { TfiEmail } from 'react-icons/tfi';

function App() {
  const bgImage = 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg';

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
          <GrGithub className="cursor-pointer  transform transition-transform duration-300 hover:scale-125" />
          <TfiEmail className="cursor-pointer transform transition-transform duration-300 hover:scale-125" />
        </span>
      </div>

      <div className="flex mt-3 w-full justify-between items-center">
        <div className={`grid h-full  w-2/3 items-start p-8 text-${BasicClasses.primary}`}>
          <h1 className=' font-bold text-6xl'> Welcome. </h1>
          <p className={`font-semibold mt-4 `}>
            👋 Hey, I'm Kelechi, a Full Stack Developer passionate about JavaScript, React.js, React
            Native, Express.js, and TypeScript. <br />
            🚀 I specialize in crafting dynamic web and mobile applications, from sleek React.js UIs
            to robust Express.js backends. <br />
            💡 I've built a microblogging betting system for insightful predictions and dabbled in
            e-commerce for seamless online shopping. <br />
            🔧 With TypeScript, I ensure code reliability. Let's innovate together!
            <br />
            Explore my portfolio for creative and functional projects.
          </p>
        </div>
        <div className={`grid w-1/3 h-full items-start p-8 text-${BasicClasses.primary}`}>
        <h1 className=' font-bold text-6xl'> Projects. </h1>
        <p className={`font-semibold mt-4 `}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur saepe rerum facere, deleniti ipsa commodi, fugit corrupti ipsam quos, iusto iure quam aut? Dolores aliquid veritatis laboriosam, debitis ea voluptates.</p>
        </div>
      </div>
    </section>
  );
}

export default App;
