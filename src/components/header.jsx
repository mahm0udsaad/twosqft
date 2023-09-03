import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import ParallaxVideo from './video';

const TextAnimation = () => {
  const text = "We provide seamless design-to-build service to create endearing spaces";
  const [isVisible, setIsVisible] = useState(Array(text.length).fill(false));

  useEffect(() => {
    const delay = 40;

    text.split('').forEach((_, index) => {
      setTimeout(() => {
        setIsVisible((prev) => {
          const updatedVisibility = [...prev];
          updatedVisibility[index] = true;
          return updatedVisibility;
        });
      }, index * delay);
    });
  }, []);

  return (
   <section>
     <div className="flex flex-col">
      <div  style={{ position: 'relative', height: '60vh' }}>
        <Parallax translateY={['-70%', '70%']} className="z-20 leading-10 text-center sm:text-start text-5xl lg:text-8xl md:text-7xl text-white font-bold mx-auto lg:w-11/12">
            <div className="sm:pl-24">
          <AnimatePresence>
            {isVisible.map((visible, index) => (
              index > 19 && index < 35 ?
                <motion.span
                  key={index}
                  className='underline'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: visible ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                >
                  {text[index]}
                </motion.span>
                :
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: visible ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                >
                  {text[index]}
                </motion.span>
            ))}
          </AnimatePresence>
            </div>
          <div className="w-full flex justify-center pt-24">
            <motion.button
              className="border nav-btn text-xl text-white rounded-full p-5 w-48 mr-4 hover:bg-white hover:text-black transition duration-300 flex items-center justify-around"
            >
              Continue
            </motion.button>
          </div>
        </Parallax>
      </div>
      <ParallaxVideo />
    </div>
      <div className="text-white p-8 w-full flex flex-col-reverse md:space-y-5 lg:flex-row justify-between">
        <div className=" justify-around flex flex-col lg:w-1/2">
          <h2 className="text-3xl font-bold">ABOUT US</h2>
          <i className='text-2xl'>Two Square Feet,
          ensures that every aspect of your project is carefully designed and executed.</i>
          <p className="mb-4">
         Two Square Feet is a full-service construction firm with a team of architects, engineers, interior designers, and turnkey specialists to bring your vision to life. We operate at the intersection of leading-edge technology and state-of-the-art designs to give you a seamless experience. With a focus on collaboration, attention to detail, and unwavering commitment to quality, we are dedicated to creating beautiful, functional, and endearing spaces.
          </p>
        </div>
        <div className="md:w-3/5 md:mx-auto lg:w-1/2 flex items-center">
          <img className='md:my-5 w-full h-auto' src={'https://www.twosqft.com/wp-content/uploads/2022/04/asset-4.png'} alt="About Us" />
        </div>
      </div>
   </section>
  );
};

export default TextAnimation;
