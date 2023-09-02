import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TextAnimation = () => {
  const text = "We provide seamless design-to-build service to create endearing spaces";
  const [isVisible, setIsVisible] = useState(Array(text.length).fill(false));

  useEffect(() => {
    const delay = 50; 

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
    <div className="flex flex-col">
        <div className="sticky text-8xl text-white font-bold mx-auto pt-12 w-11/12 text-center">
      <AnimatePresence>
        {isVisible.map((visible, index) => (
          index > 16 && index < 35?
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
          className="border nav-btn text-xl text-white rounded-full p-5 w-48 mr-4 hover:bg-white hover:text-black transtion duration-300 flex items-center justify-around"
        >
          continue
        </motion.button>
      </div>
        <div className="relative mt-24" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
        src="https://www.youtube.com/embed/ymJA4Ak61oc?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.twosqft.com&widgetid=1"
        className="absolute top-0 left-0 w-full h-full"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
      </div>
        <div className="absolute flex justify-center items-center h-screen top-0 right-5 text-white">
            <span className='-rotate-90 font-semibold'>scroll</span>
        </div>
        <div className="absolute flex justify-center items-center h-screen top-0 left-0 text-white">
            <span className='-rotate-90 font-semibold flex'>
            <div className="icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-11 h-8 "
                >
                <circle cx="8" cy="12" r=".8" />
                <circle cx="16" cy="12" r=".8" />
                <circle cx="8" cy="6" r=".8" />
                <circle cx="16" cy="6" r=".8" />
                </svg>
            </div>
            Projects Index
            </span>
        </div>
    </div>
  );
};

export default TextAnimation;
