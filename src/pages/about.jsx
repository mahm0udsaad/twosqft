import {FullScreenVideo} from '../components/video'
import '../App.css'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ContentSquare } from '../components/content';
import { Parallax } from 'react-scroll-parallax';
import { PageFooter } from '../components/footer';

const imageUrls = [
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c1.jpg',
    'https://architecturehub.liquid-themes.com/elementor/wp-content/uploads/2021/08/Placeholder@2x1-1.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c3.jpg',
    'https://architecturehub.liquid-themes.com/elementor/wp-content/uploads/2021/08/Placeholder-2@2x1-1.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c2.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c1.jpg',
    'https://architecturehub.liquid-themes.com/elementor/wp-content/uploads/2021/08/Placeholder@2x1-1.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c3.jpg',
    'https://architecturehub.liquid-themes.com/elementor/wp-content/uploads/2021/08/Placeholder-2@2x1-1.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c2.jpg',
  ];
  const data = [
    {
      imageUrl: 'https://www.twosqft.com/wp-content/uploads/2023/06/two_team1.jpg',
      percentage: '95%',
      description: 'Client Satisfaction - Positive feedback, repeat business, and referrals indicate our ability to meet and exceed client expectations.',
    },
    {
      imageUrl: 'https://www.twosqft.com/wp-content/uploads/2023/06/twoput1.jpg',
      percentage: '50+',
      description: 'Projects - Successfully completing projects within the specified time frame and allocated budget showcases our efficiency, project management skills, and ability to handle complex tasks.',
    },
    {
      imageUrl: 'https://www.twosqft.com/wp-content/uploads/2023/06/acq.jpg',
      percentage: '5LAKH+',
      description: 'SQFT design delivered with craftsmanship, attention to detail, adherence to industry standards, and the overall durability and functionality of our projects, establishing our reputation and credibility in the market.',
    },
  ];
  const Card = ({ data }) => {
    return (
      <div className="p-4 sm:w-[35%]">
        <img src={data.imageUrl} alt="Project" className="w-full h-4/5" />
        <div className="text-center mt-4">
          <p className="text-7xl my-10 font-bold">{data.percentage}</p>
          <p className="text-gray-600 text-start">{data.description}</p>
        </div>
      </div>
    );
  };
  
const About =()=>{
const [x , setX] = useState(0)
const [repeat , setRepeat] = useState(false)
useEffect(()=>{
    if(x == 2500 ){
        setX(0)
    }
    const intervalId = setInterval(() => {
          setX((prev => prev - 1 ))
      }, 30); // Change images every 3 seconds (adjust as needed)

      return () => clearInterval(intervalId);
},[x])
return (
     <section className='space-y-5 overflow-hidden'>
        <div className="title w-11/12 mx-auto mb-10 ">
            <span className="rounded-full p-1 text-sm px-3 bg-black text-white font-semibold">ABOUT US</span>
            <br />
            <i className="text-4xl bold">Design, Construct, Transcend</i>
            <h1 className="text-4xl bold">beyond square footage</h1>
        </div>
        <FullScreenVideo />
        <div className="w-[98%] mx-auto">
            <div className="w-full flex justify-between border-b-[1px] border-black">
                <p>ABOUt US</p>
                <p>01</p>
            </div>
             <div className="w-full my-5">
             <span className="mt-5 rounded-full p-1 text-sm px-3 bg-black text-white font-semibold"> WHAT DO WE OFFER ?</span>
             </div>
            <div className="w-full sm:flex justify-between mt-10">
             <div className="first font-semibold sm:w-[33%]">
            <h1 className="text-2xl sm:text-4xl pb-5">We offer comprehensive design and build solutions, providing end-to-end services for all your project needs.</h1>
             <ul className="flex space-x-2">
                <li>★</li>
                <li>★</li>
                <li>★</li>
                <li>★</li>
                <li>★</li>
             </ul>
             </div>
             <div className="midd text-xl my-5 sm:text-3xl font-semibold">
                <ul>
                    <li>Architectural Design</li>
                    <li>MEP Design</li>
                    <li>Interior Design</li>
                    <li>Fit-out / Furniture</li>
                    <li>Construction</li>
                    <li></li>
                </ul>
             </div>
             <div className="last sm:w-[30%]">
                <p>Experience the ultimate convenience and expertise with our full-service design and build company. Our dedicated team takes charge of every aspect of your project, ensuring a seamless journey from start to finish. From the initial conceptualization to the final completion, we handle it all, allowing you to embrace a stress-free experience. With our meticulous oversight, your vision transforms into reality, delivering exceptional results at every step.</p>
             </div>
            </div>
            <div 
            style={{ transform: `translateX(${x}px)` }}
            className="image-container mt-10 w-full flex space-x-12">
            {imageUrls.map((url, index) => (
                <img
                key={index}
                src={url}
                className={index % 2 !== 0 ? 'w-48 sm:w-[20rem]' : 'w-12 sm:w-[20rem] mt-10 sm:h-[20rem]'}
                />
            ))}
            </div>
            <div className="sm:flex pt-20">
            <h1 className='text-5xl mx-20 pt-5 sm:mb-0 mb-10 text-ce'>Process</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <ContentSquare
                number="01"
                title="Program"
                description="We completely comprehend your needs and requirements with which we tailor the project’s program"
            />
            <ContentSquare
                number="02"
                title="Concept"
                description="Through a unique combination of engineering, construction, design disciplines and expertise we come up with the best solution for you"
            />
            <ContentSquare
                number="03"
                title="Design"
                description="Build a solid foundation for your construction project's success through comprehensive budgeting and meticulous planning."
            />
            <ContentSquare
                number="04"
                title="Build"
                description="Harness the power of strategic management and impeccable execution to realise your project's vision."
            />
             </div>
          </div>
        </div>
        <div className="w-full hidden sm:flex justify-between">
            <div className="w-1/2  relative">
                <Parallax
                translateY={['0%', '10%']}
                >
                    <img className='absolute h-80 left-[30%] top-20 z-0 ' src="https://www.twosqft.com/wp-content/uploads/2023/06/ab2.jpg" alt="" />
                </Parallax>
                <Parallax
                translateY={['0%', '10%']}
                >
                    <img className='absolute w-56 h-80 right-5' src="https://www.twosqft.com/wp-content/uploads/2023/06/ab3.jpg" alt="" />
                </Parallax>
                <Parallax
                translateY={['0%', '10%']}
                >
                    <img className='absolute w-60 ' src="https://www.twosqft.com/wp-content/uploads/2023/06/about1.jpg" alt="" />
                </Parallax>
            </div>
            <div className="w-2/5 p-5">
                <span style={{color:'#ac8c66'}}>MEET TWOSOFT</span><br />
                <i className="text-4xl">Brilliant</i>
                <h1 className="text-4xl font-bold pb-8">
                    and detail-oriented .
                </h1>
                <p>
                    
Indulge in the brilliance of our design and engineering team, where innovation and expertise converge to create remarkable solutions. With boundless creativity and technical mastery, we redefine possibilities, pushing the boundaries of what's imaginable. Every project is an opportunity to showcase our unwavering commitment to excellence, delivering awe-inspiring designs that captivate, inspire, and leave a lasting impact. Trust our team to bring your vision to life with unrivaled passion and precision.
                </p>
            </div>
        </div>
        <div className="h-[50vh] overflow-auto panner">
        <div className="w-full">
        </div>
        </div>
        <div className="w-[98%] mx-auto">
        <div className="w-full flex justify-between border-b-2 border-black">
                <p>ABOUt US</p>
                <p>01</p>
         </div>
        <div className="sm:flex space-x-5 mb-28">
            {data.map((el,index) => <Card key={index} data={el} />)}
        </div>
        </div>
        <PageFooter />
    </section>
)
}
export default About ;