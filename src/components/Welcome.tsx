import { BasicClasses } from '../styles/BasicStyles'

export default function Welcome() {
  return (
    <div className={`flex flex-col gap-4 h-full  w-full p-3 md:p-8 text-${BasicClasses.primary}`}>
          <h1 className=' font-bold text-3xl md:text-6xl'> Hi, I'm Kelechi </h1>
          <div className=' flex border-l-4 pl-6 rounded-tl-lg rounded-bl-lg '>
          <p className={`font-semibold text-lg `}>
            {/* 👋 */}
             A Full Stack Developer passionate about JavaScript, React.js, React
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
        </div>
  )
}
