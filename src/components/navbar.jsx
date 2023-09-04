import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronRight,faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPinterest, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion , AnimatePresence} from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';

const CustomBurgerIcon = () => (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
  );
  const CustomXIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
const Navbar = ({setIsCollapOpen , isCollabOpen , color , hide}) => {
  const [isOpen, setIsOpen] = useState(false);
  const greetings = ['hello', '你好', 'もしもし', 'hola'];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const togglecollabsecion = () => {
    setIsCollapOpen(!isCollabOpen);
  };
  const blackLogoSrc = 'https://twosqft.com/wp-content/uploads/2022/03/twosqft_black.png'
  const whiteLogoSrc = 'https://twosqft.com/wp-content/uploads/2022/03/twosqft1.png'

  const navbarVariants = {
    open: { width: '100%' },
    closed: { width: '64px' },
  };
  const menuButtonVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };
  const titleVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };
  const contactButtonVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3500);

    return () => clearTimeout(timer);
  }, [currentGreetingIndex, greetings]);
  const transitionClass = "transition-transform duration-300 ease-in-out transform";
  return (
   <>
      <div className={`${hide} transtion duration-300`}>
      <Parallax translateY={['-70%', '120%']} className={`absolute flex justify-center items-center h-screen top-0 right-0 text-${color}`}>
        <span className='-rotate-90 font-semibold'>scroll</span>
      </Parallax>
      <Parallax  translateY={['-70%', '120%']} className={` absolute flex justify-start  h-screen items-center top-0 -left-16 sm:-left-12 text-${color}`}>
        <span className='-rotate-90 font-semibold flex items-center'>
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
      </Parallax>
      </div>
     <nav
      style={{color:color}}
      className={`${hide} transtion duration-300 sticky flex sm:flex-row flex-col-reverse sm:px-10  sm:flex text-white justify-between items-center p-5 lg:p-12 fixed top-0 left-0 right-0 z-10`}
    >
      <div className="flex items-center">
        <motion.button
          className={`border border-${color} nav-btn rounded-full p-3 w-32 sm:mr-4 hover:bg-white hover:text-black transtion duration-300 flex items-center justify-around`}
          onClick={toggleMenu}
        >
          menu
          <div className={`${transitionClass} ${isOpen ? "rotate-90" : "rotate-0"}`}>
        {isOpen ? <CustomXIcon /> : <CustomBurgerIcon />}
        </div>
        </motion.button>

      </div>
        <motion.img
          className="h-12 hover:scale-110 transition-transform cursor-pointer"
          src={color === 'black' ? blackLogoSrc : whiteLogoSrc}
          alt="Logo"
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
        />

    <div className="sm:flex hidden">
    <motion.button
      className={`border border-${color} nav-btn rounded-full p-3 w-40 mr-4 hover:bg-white hover:text-black transition duration-300 flex items-center justify-around`}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
    >
      contact Us
      <FontAwesomeIcon
        icon={faChevronRight}
        size="1x"
        className="mt-1 transition-transform transform hover:translate-x-[5px]"
      />
    </motion.button>
    <motion.button
            onClick={togglecollabsecion}
          className={`border border-${color} nav-btn rounded-full w-12 flex flex-col hover:bg-white hover:text-black`}
    >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-11 h-8 mt-2.5"
        >
        <circle cx="8" cy="12" r=".8" />
        <circle cx="16" cy="12" r=".8" />
        <circle cx="8" cy="6" r=".8" />
        <circle cx="16" cy="6" r=".8" />
        </svg>
    </motion.button>
    </div>
        <AnimatePresence>
        {isCollabOpen && (
          <motion.div
            className={`collab bg-white text-white absolute top-0 right-0 w-3/5 h-screen z-20 ${transitionClass}`}
            initial={{ translateX: '100%' ,opacity:0}}
            animate={{ translateX: '0%' ,opacity:1}}
            exit={{ translateX: '100%' ,opacity:0}}
          >
          <div className="w-full absolute top-[30%]">
          <div className="p-4 w-3/5 mx-auto">
            <div className="mb-4 space-y-5">
            <motion.h2 className="text-5xl text-black font-semibold">
        Collaboration, work enquires, or just say <br />
        <motion.span
          key={currentGreetingIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }} 
        >
          {greetings[currentGreetingIndex]}
        </motion.span>
      </motion.h2>                
      <div className="flex items-center text-xl space-x-2 text-black">
              <FontAwesomeIcon icon={faPhone} className="text-blue-500" />
              <span>(+91)8294373340</span>
              </div>
              <div className="flex items-center text-xl space-x-2 text-black">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-500" />
              <span>hello@twosqft.com</span>
              </div>
              <div className="flex items-center text-xl space-x-2 text-black">
              <FontAwesomeIcon icon={faMapMarker} className="text-" />
              <span>Twosqft, Baani Square, Sector -67 Gurugram, 120045</span>
              </div>
            </div>

            <div className="flex space-x-4">
            <Link href="#" className="border rounded-full p-5 transtion duration-300 bg-black hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faPinterest} />
            </Link>
            <Link href="#" className="border rounded-full p-5 transtion duration-300 bg-black hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="#" className="border rounded-full p-5 transtion duration-300 bg-black hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faInstagram} />
            </Link>
            </div>
           
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
        <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`overflow-y-hidden toggled-menu text-black absolute top-0 left-0 w-full h-screen z-20 ${transitionClass}`}
            initial={{ translateX: '-100%' ,opacity:0}}
            animate={{ translateX: '0%' ,opacity:1}}
            exit={{ translateX: '-100%' ,opacity:0}}
          >
            <motion.button
              className="p-3 text-white w-28 mr-4 transtion duration-300 flex items-center justify-around"
              onClick={toggleMenu}
            >
              <div className={`${transitionClass} pt-5 ${isOpen ? "rotate-90" : "rotate-0"}`}>
                {isOpen ? <CustomXIcon /> : <CustomBurgerIcon />}
              </div>
            </motion.button>
            <div className="flex justify-between sm:pt-24 sm:w-11/12 h-3/5 text-2xl sm:text-5xl">
            <div className="flex flex-col z-50 mx-1 sm:mx-5 h-full justify-center">
              <Link onClick={()=>setIsOpen(false)} to={'/'} className="nav-link pt-5 text-gray-300 transtion  hover:text-white">Home</Link>
              <Link onClick={()=>setIsOpen(false)} to={'/about'} className="nav-link pt-5 text-gray-300 transtion  hover:text-white">About</Link>
              <Link onClick={()=>setIsOpen(false)} to={'/services'} className="nav-link pt-5 text-gray-300 transtion  hover:text-white">Services</Link>
              <Link onClick={()=>setIsOpen(false)} to={'/works'} className="nav-link pt-5 text-gray-300 transtion  hover:text-white">Works</Link>
              <Link onClick={()=>setIsOpen(false)} to={'/discourses'} className="nav-link pt-5 text-gray-300 transtion  hover:text-white">Discourses</Link>
              <Link onClick={()=>setIsOpen(false)} to={'/contact'} className="nav-link pt-5 text-gray-300 transtion  hover:text-white">Contact</Link>
            </div>
            <div className="text-sm grid grid-cols-2  sm:grid-cols-2 sm:gap-4 h-full pt-16 px-1 sm:p-20 justify-center w-2/1">

            <div className="p- text-white">

                <h2 className="font-semibold text-gray-500 pb-5">India</h2>
                <p>(+91) 8294373340</p>
                <p>hello@twosqft.com</p>
            </div>
            <div className="p- text-white">
                <h2 className="font-semibold text-gray-500 pb-5">Info</h2>
                <p>(+91) 8294373340</p>
                <p>hello@twosqft.com</p>
            </div>

            <div className="p- text-white">

                <h2 className="font-semibold text-gray-500 pb-5">Find Us</h2>
                <p>Twosqft, Baani Square,</p>
                <p>Sector - 67 Gurugram, 120045</p>
            </div>

            <div className="p- text-white">

                <h2 className="font-semibold text-gray-500 pb-5">Social</h2>
                <p>Pinterest</p>
                <p>Medium</p>
                <p>Instagram</p>
            </div>
            </div>
            </div>
            <footer className="p-4 text-white">
            <div className="border-t border-gray-400 my-4"></div>
            <div className="flex justify-between items-center">
            <div className="flex space-x-2 sm:space-x-4">
            <a href="#" className="border rounded-full p-3 sm:p-5 transtion duration-300 hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a href="#" className="border rounded-full p-3 sm:p-5 transtion duration-300 hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="border rounded-full p-3 sm:p-5 transtion duration-300 hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            </div>
              
              <div>
             • Available for new projects.
            </div>
        </div>
        </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
   </>
  );
};

export default Navbar;