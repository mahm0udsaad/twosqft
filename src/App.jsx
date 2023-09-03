import { useState ,useEffect} from 'react'
import './App.css'
import Navbar from './components/navbar'
import TextAnimation from './components/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faDraftingCompass, faClipboardList, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Parallax , useParallax ,useParallaxController} from 'react-scroll-parallax'

function App() {
  const [isCollabOpen, setIsCollapOpen] = useState(false);
  const [bg,setBg] = useState(`rgb(28 28 28)`)
  const [color,setColor] = useState(`white`)
  const listenScrollEvent = () => {
    const scrollY = window.scrollY;
    
    if (scrollY > 3000) {
      setBg('#072326');
      setColor('white');
    } else if (scrollY > 1000) {
      setBg('white');
      setColor('black');
    } else {
      setBg('rgb(28 28 28)');
      setColor('white');
    }
  };
  useEffect(() => {
    // Add an event listener for the scroll event
    window.addEventListener('scroll', listenScrollEvent);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);
  const serviceIcons = [
    {
      name: 'Site Analysis & Spatial Programming',
      icon: faCogs,
      description: 'We completely comprehend your needs and requirements with which we tailor the project’s program.',
    },
    {
      name: 'Architectural Design',
      icon: faDraftingCompass,
      description: 'Through a unique combination of engineering, construction, design disciplines and expertise we come up with the best solution for you.',
    },
    {
      name: 'Planning & Estimation',
      icon: faClipboardList,
      description: 'Build a solid foundation for your construction project\'s success through comprehensive budgeting and meticulous planning.',
    },
    {
      name: 'Management & Construction',
      icon: faBuilding,
      description: 'Harness the power of strategic management and impeccable execution to realize your project\'s vision.',
    },
  ];
  return (  
    <>
      <div className="App" style={{backgroundColor:bg}}>
      <section onScroll={listenScrollEvent}className='main'>
      <Parallax translateY={['-70%', '120%']} className={`absolute flex justify-center items-center h-screen top-0 right-5 text-${color}`}>
        <span className='-rotate-90 font-semibold'>scroll</span>
      </Parallax>
      <Parallax  translateY={['-70%', '120%']} className={`absolute flex justify-center items-center h-screen top-0 -left-5 text-${color}`}>
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
      </Parallax>
       <Navbar isCollabOpen={isCollabOpen} setIsCollapOpen={setIsCollapOpen}/>
        <div className="main" onClick={()=>setIsCollapOpen(false)}>
        <TextAnimation />
        </div>
      </section>
      <section >
        <div className="w-full mx-auto">
        <div className="flex text-black mx-auto p-5 justify-between">
          <div className=" lab w-1/2 text-4xl">
            <p className='text-xl'>OUR PROJECTS</p>
            <i>design , construct , transcend-</i><br />
            <h2 className="text-4xl font-bold">beyond square footage</h2>
          </div>
          <div className="lab w-1/2">
            <p>With a focus on collaboration, attention to detail, and unwavering commitment to quality, we are dedicated to creating beautiful, functional, and enduring spaces.</p>
          </div>
        </div>
        <div className="flex mt-10 w-full justify-around">
          <img className='w-3/5' src="https://www.twosqft.com/wp-content/uploads/2023/02/MicrosoftTeams-image-9-1536x1229.png" alt="about" />
           <div className="flex flex-col text-center items-center justify-center">
            <p>OUR PROJECTS</p>
            <i className='text-3xl'>Commercial</i>
            <p className="underline transtion duration-300 hover:text-orange-200">Learn more</p>
           </div>
        </div>
        <div className="flex mt-10 w-full justify-around">
           <div className="flex flex-col text-center items-center justify-center">
            <p>OUR PROJECTS</p>
            <i className='text-3xl'>Residential</i>
            <p className="underline transtion duration-300 hover:text-orange-200">Learn more</p>
           </div>
           <img className='w-3/5' src='https://www.twosqft.com/wp-content/uploads/2023/02/MicrosoftTeams-image-3-1536x864.jpg' alt="about" />
        </div>
        </div>
      <div className="flex w-3/5 m-5 pt-8">
        <ul className='w-1/2'>
          <li className='lg:text-6xl'>Creative .</li>
          <li className='lg:text-6xl'>Functional .</li>
          <li className='lg:text-6xl'>Luxurious .</li>
        </ul>
        <ul className='w-1/2'>
          <li className='lg:text-6xl'>Influential .</li>
          <li className='lg:text-6xl'>Landmark .</li>
          <li className='lg:text-6xl'>Expressive .</li>
        </ul>
      </div>
      </section>
      <section >
      <div className="text-black p-8 w-full lg:flex space-x-5 space-y-5  justify-between">
        <div className="md:w-1/2 space-y-5 md:ml-8 justify-around flex flex-col">
          <p>MEET TWOSWFT</p>
          <i className='text-4xl font-semibold'>Creative,
          and proficient.</i>
        </div>
          <p className="mb-4 w-6/12 text-lg">
          Twosqft employs over 100 employees, the majority of whom are based on project sites. We embrace holistic development and support for employees with the aim of being a first-choice.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-black">
      {serviceIcons.map((service, index) => (
        <div key={service.name} className="p-4 text-cente border-r">
          <div className="flex justify-around">
          <div className="text-4xl text-blue-500 mb-4">
            <FontAwesomeIcon icon={service.icon} style={{ color: '#072326' }} />
          </div>
          <div className="rounded-full text-black shadow-md text-base w-8 h-8 flex items-center justify-center">
            <span>{index + 1}</span>
          </div>
          </div>
          <h3 className="text-lg font-semibold">{service.name}</h3>
          <p className='text-black'>{service.description}</p>
        </div>
      ))}
    </div>
      </section>
      </div>
    </>
  )
}

export default App
