import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function AccordionItem({ title, content }) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div onClick={toggleDescription} className={`cursor-pointer`}>
      <div className="title flex 'flex justify-between items-center'">
      <h1 className="text-xl py-5 font-semibold">{title}</h1>
      <div className='flex items-center transtion duration-300'><span>{showDescription ? '-':'+'}</span></div>
      </div>
      <AnimatePresence>
        {showDescription && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {content}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
const ProjectCard = ({ img, title }) => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="img-wrapper w-full">
      <img src={img} alt={title} className="w-full rounded-lg sm:h-[15rem]" />
      </div>
      <div className="py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};


export {ProjectCard, AccordionItem};
