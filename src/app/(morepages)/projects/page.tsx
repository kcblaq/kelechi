import React from 'react'
import { ProjectCard, WebmaxiCard } from './ProjectCard';
import WEBMAXI from "../../../../public/asset/projects/webmaxi.svg";
import BUD from "../../../../public/asset/projects/bud.svg";
import ZUMMIT from "../../../../public/asset/projects/zummit.svg";
import HALO from "../../../../public/asset/projects/halo.svg";
import GLOBALREFORMATION from "../../../../public/asset/projects/globalreformation.svg";
import SHORTCHASE from "../../../../public/asset/projects/shortchase.svg";

export default function page() {
  const webmaxi = {
    title: 'Webmaxi',
    description: 'Webmaxi is a robust SEO agency catering to both commercial and private clients. It specializes in SEO management and optimization, offering comprehensive services to enhance online visibility and drive traffic. Key features include:',
    tools: ['Express', 'TypeScript', 'NextJs'],
    link: 'https://webmaxi.net',
    image: '/asset/projects/webmaxi.svg',
    items: [`SEO Management:</span>Tailored strategies to improve search engine rankings.`, `Optimization:</span> On-page and off-page SEO to boost website performance.`, `Analytics: </span> Detailed reports and insights to track progress and ROI.`, `Consultation:</span> Expert advice and support for continuous improvement.`]
  }
  const bud = {
    title: 'Budco',
    description: 'Bud is a company specializing in budget management solutions for organizations. It offers tools for efficient budget allocation and disbursement, ensuring transparency and control over financial resources. The platform integrates seamlessly with existing systems, providing real-time tracking and reporting to optimize financial operations.',
    tools: ['TypeScript', 'NextJs'],
    link: 'https://budhq.co/',
    image: '/asset/projects/bud.svg',
    items: []
  }
  const zummit = {
    title: 'Zummit',
    description: 'Zummit Africa is an institution for building APIs and AI for businesses and organizations. It has two wings:',
    tools: ['ReactJs', 'Typescript'],
    link: 'https://www.zummitafrica.com/',
    image: '/asset/projects/zummit.svg',
    items: ["Training potential IT experts in various fields, and",
      "Building applications"]
  }
  const halo = {
    title: 'Halo',
    description: 'Halo Asset is a fin-tech platform where verified users can save, invest and borrow money. Users can:',
    tools: ['ReactJs', 'Typescript'],
    link: 'https://www.haloasset.com/',
    image: '/asset/projects/zummit.svg',
    items: [
      "Create account and get verified",
      "Send and receive money on their wallets",
      "Save in various forms, such as automated deduction from a linked card periodically",
      "Invest into various stocks and bonds",
      "Withdraw into an account"
    ]
  }
  const globalreformation = {
    title: 'Global Reformation',
    description: 'An e-learning platform for global leadership transformation. It is a full-featured platform for e-learning, including;',
    tools: ['Wordpress'],
    link: 'https://globalreformationnetwork.org/',
    image: '/asset/projects/zummit.svg',
    items: [
      "Multi-user category for admin, students and tutors",
      "Registration and login",
      "Taking courses and quizes",
      "Uploading and scoring quizes",
      "Certificate generation after a succesfull course.",
    ]
  }
  const shortchase = {
    title: 'Shortchase',
    description: 'Shortchase is a social micro-blogging peer-to-peer betting platform for making any kind of custom wager. Users can:',
    tools: ['NextJs', 'Typescript'],
    link: 'https://www.shortchase.com/',
    image: '/asset/projects/zummit.svg',
    items: [
      "Make wagers and invite others to bet for or against them",
      "Create a giveaway for other users to bet on",
      "Sell their own betting signals",
      "See results of their wager, and be rewarded for it, such rewards can be withdrawn to their bank account",
    ]
  }


  return (
    <div className={`w-full  grid px-3 lg:px-20 pb-2 py-10  gap-4 `}>

      <ProjectCard tools={webmaxi.tools} title={webmaxi.title} description={webmaxi.description} image={WEBMAXI} items={webmaxi.items} link={webmaxi.link} />

      <ProjectCard tools={bud.tools} title={bud.title} description={bud.description} image={BUD} items={bud.items} link={bud.link} />
      <ProjectCard tools={halo.tools} title={halo.title} description={halo.description} image={HALO} items={halo.items} link={halo.link} />
      <ProjectCard tools={zummit.tools} title={zummit.title} description={zummit.description} image={ZUMMIT} items={zummit.items} link={zummit.link} />
      <ProjectCard tools={globalreformation.tools} title={globalreformation.title} description={globalreformation.description} image={GLOBALREFORMATION} items={globalreformation.items} link={globalreformation.link} />

      <ProjectCard tools={shortchase.tools} title={shortchase.title} description={shortchase.description} image={SHORTCHASE} items={shortchase.items} link={shortchase.link} />
    </div>
  )
}
