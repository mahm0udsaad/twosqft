import React from 'react';
import {AccordionItem} from './typography'; 
import { Parallax } from 'react-scroll-parallax';

function IntroWithAccordion({ title, imageSrc, services ,left}) {
  return (
    <div className={`${left ? ' lg:flex-row-reverse md:flex-row-reverse':''} sm:my-10 intro py-10 sm:flex justify-between overflow-hidden `}>
     <Parallax translateY={[-20, 10]} className="transtion duration-300 img-wrapper sm:w-1/2 flex flex-col justify-center items-center">
     <div className="wrapper overflow-hidden">
     <img className='sm:w-11/12' src={imageSrc} alt="" />
     </div>
     </Parallax>
       <div className="sm:w-2/5 px-">
       <div className="flex flex-col justify-between title w-11/12 mx-auto mb-10">
        <div className="top pt-5">
          <span className="rounded-full p-1 text-sm px-3 bg-gray-300 text-black font-semibold">SERVICES</span>
          <br />
          <h1 className="font-semibold text-5xl my-3">{title}</h1>
          <p>{services.description}</p>
        </div>
        <span>{services.sectionNumber}</span>
      </div>
      <div className="grid grid-cols-1 divide-y">
        {services.items.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
       </div>
    </div>
  );
}

export default IntroWithAccordion;
