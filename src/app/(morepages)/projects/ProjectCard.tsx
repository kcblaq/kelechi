import React from 'react';
import WEBMAXI from "../../../../public/asset/projects/webmaxi.svg";
import { GoLinkExternal } from "react-icons/go";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export function WebmaxiCard() {

    const webmaxi = ["Express", "TypeScript", "NextJs"]
    return (
        <div className='rounded-3xl w-full bg-[#EBEBEB] text-[#808080] py-16 grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='col-span-1 grid lg:col-span-1 w-full px-3 lg:px-16 gap-3'>
                <h1 className='text-2xl font-bold'>Webmaxi</h1>
                <div className='flex flex-col gap-2 mt-6'>
                    <p>
                        Webmaxi is a robust SEO agency catering to both commercial and private clients. It specializes in SEO management and optimization, offering comprehensive services to enhance online visibility and drive traffic.
                        Key features include:
                    </p>
                    <div className="">
                        <li>

                            <span className="font-bold" >SEO Management:</span>Tailored strategies to improve search engine rankings.
                        </li>
                        <li>

                            <span className="font-bold" > Optimization:</span> On-page and off-page SEO to boost website performance.
                        </li>
                        <li>

                            <span className="font-bold" >Analytics: </span> Detailed reports and insights to track progress and ROI.
                        </li>
                        <li>

                            <span className="font-bold" > Consultation:</span> Expert advice and support for continuous improvement.

                        </li>
                    </div>
                    <p> etc.</p>

                </div>
                <div className='flex items-center gap-4'>
                    {webmaxi.map((item, index) => (
                        <div key={index} className='bg-[#f9f9f9] px-4 py-2 rounded-lg'>
                            {item}
                        </div>
                    ))}
                </div>
                <div className='flex gap-4 mt-6 text-black hover:text-primary'>
                    <a href='https://webmaxi.net' target='_blank' className='flex items-center gap-2'>Visit Site <GoLinkExternal /> </a>
                </div>
            </div>

            <div className='w-full col-span-1 grid mt-4 lg:mt-0 '>
                <Image src={WEBMAXI} alt='Webmaxi' width={564} />

            </div>
        </div>
    )
}

interface Props {
    tools: string[],
    title: string,
    description: string,
    link: string,
    image: StaticImageData,
    items?: string[]

}
export function ProjectCard({tools, title, description, items, link, image} : Props) {

    
    return (
        <div className='rounded-3xl w-full bg-[#EBEBEB] text-[#808080] py-16 grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='col-span-1 grid lg:col-span-1 w-full px-3 lg:px-16 gap-3'>
                <h1 className='text-2xl font-bold'> {title} </h1>
                <div className='flex flex-col gap-2 mt-6'>
                    <p>
                        {description}
                    </p>
                    <div className="">
                    <ul className='list-disc pl-5'>
                        {items?.map((item, index) => {
                            // Remove </span> tag and split the item
                            const cleanedItem = item.replace('</span>', '');
                            const [boldPart, description] = cleanedItem.split(':').map(part => part.trim());
                            return (
                                <li key={index} className='mb-2'>
                                    <span className="font-bold">{boldPart}: </span>{description}
                                </li>
                            );
                        })}
                    </ul>
                    </div>
                    <p> etc.</p>

                </div>
                <div className='flex items-center gap-4'>
                    {tools.map((item, index) => (
                        <div key={index} className='bg-[#f9f9f9] px-4 py-2 rounded-lg'>
                            {item}
                        </div>
                    ))}
                </div>
                <div className='flex gap-4 mt-6 text-black hover:text-primary'>
                    <a href={link} target='_blank' className='flex items-center gap-2'>Visit Site <GoLinkExternal /> </a>
                </div>
            </div>

            <div className='w-full col-span-1 grid mt-4 lg:mt-0 '>
                <Image src={image} alt='Webmaxi' width={564} />

            </div>
        </div>
    )
}
