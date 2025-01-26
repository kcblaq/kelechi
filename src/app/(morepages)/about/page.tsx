import React from 'react';
// import { Comforter_Brush } from 'next/font/google';
import KC from "../../../../public/asset/kelechi.svg";
import ME from "../../../../public/asset/Kaycee.svg";
import Image from 'next/image';
import GetInTouch from './GetInTouch';



export default function About() {
  const linkStyle = "text-primary font-bold";
  // const comforterBrush = Comforter_Brush({ weight: '400' });

  
  return (
    <section className="w-full  grid px-3 lg:px-20 pb-2 py-10 grid-cols-1 lg:grid-cols-3 gap-4">
     <div className="col-span-1 lg:col-span-2 grid gap-3 lg:gap-6 py-6 lg:py-10 text-[#808080]">
      {/* <h1 className="text-2xl font-bold">About Me</h1> */}
      <p className="text-lg">
      I&apos;m a passionate full-stack software engineer with a strong background in the MERN stack. After studying computer science at the university and completing a software engineering course at Decagon Institute, I embarked on my full-stack development journey in 2021.
      </p>
      <p>
      Since then, I&apos;ve been actively involved in open-source projects, freelance work, and collaborations with various companies, including my current role at Shortchase. I&apos;m proficient in technologies like React, Node.js, MongoDB, Express, Tailwind CSS, Material UI, Next.js, and Javascript, and I&apos;m always eager to learn and explore new tools and frameworks.
      </p>
      <p>
      Fitness and personal development are also important to me. I exercise regularly and enjoy reading books on topics that inspire and challenge me. I&apos;ve even recently taken up swimming and am now looking to learn how to play the piano, as I have a deep appreciation for music and sound.
      </p>
      <p>
      Ultimately, what drives me is the excitement of being part of businesses that are growing from startups to multinational brands. I&apos;m always eager to learn, collaborate, and contribute to the success of the organizations I work with. If you&apos;re interested in working together, I&apos;d love to hear from you!
      </p>
      <p>
      Feel free to reach out via <a href='mailto:ugwujameskelechi@gmail.com' target='_blank' className={linkStyle}> e-mail </a>, or follow me on <a href='https://x.com/kcblaqdigital' className={linkStyle} target='_blank'>Twitter</a>. Want to see where I’ve worked? Check out my <a href="https://drive.google.com/file/d/1le5HknoXbLBc9IdHixm025pjpRCl7coq/view?usp=sharing" className={linkStyle}> Resume</a>, or Connect with me on <a href="https://www.linkedin.com/in/kelechiugwu" target='_blank' className={linkStyle}>LinkedIn</a>.
      </p>
      <div className='flex flex-col gap-4'>
          <p className="">
            Let&apos;s build something great, together!
          </p>

          <Image alt="Kelechi Ugwu" src={KC} className="w-1/2" width={50} />
        </div>
     </div>
     <div className="col-span-1 grid gap-3 lg:gap-6 py-6 lg:p-10 "
     
     >
     <div className="rounded-lg bg-[#f9f9f9]"
     style={{
      backgroundImage: `url(${ME.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: '10px',
     }}
     >

     </div>

    <GetInTouch/>

     </div>
    </section>
  );
}