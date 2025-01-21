"use client"
import React from 'react';
import { CardforService } from "../components/ServiceCard";

const services = [
  {
    title: 'Front-end Development',
    icon: '/icons/frontend.png',
  },
  {
    title: 'Back-end Development',
    icon: '/icons/backend.png',
  },
  {
    title: 'Software Architecture',
    icon: '/icons/architecture.png',
  },
];

export default function About() {
  return (
    <section className="bg-[#1a1b26] p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-white">My </span>
          <span className="text-purple-500">Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <CardforService
              key={service.title}
              title={service.title}
              icon={service.icon}
              onClick={() => console.log(`Clicked ${service.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}