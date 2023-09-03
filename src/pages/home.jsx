import { useState ,useEffect} from 'react'
import '../App.css'
import Footer from '../components/footer'
import TextAnimation from '../components/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faDraftingCompass, faClipboardList, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Parallax , useParallax ,useParallaxController} from 'react-scroll-parallax'

const ContentSquare = ({ number, title, description }) => {
  return (
    <div className="border border-black p-4 text-center">
      <div className="flex items-center space-x-2">
      <div className="text-4xl font-bold">{number}</div>
      <div className="text-xl font-bold">/{title}</div>
      </div>
      <p className='pt-5'>{description}</p>
    </div>
  );
};

function Home() {
  const [bg,setBg] = useState(`rgb(28 28 28)`)
  const [color,setColor] = useState(`white`)
  const listenScrollEvent = () => {
    const scrollY = window.scrollY;
    if(scrollY > 5300){
      setBg('#ffff');
      setColor('black');
    } else if(scrollY > 4500){
      setBg('#d7dedc');
      setColor('black');
      console.log(scrollY);
    }else if (scrollY > 3500) {
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
      <div>
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
        <div className="main" onClick={()=>setIsCollapOpen(false)}>
        <TextAnimation />
        </div>
      </section>
      <section >
        <div className="w-full mx-auto">
        <div className="sm:flex text-black sm:mx-auto p-5 justify-between">
          <div className=" lab sm:w-1/2 text-4xl">
            <p className='text-xl'>OUR PROJECTS</p>
            <i>design , construct , transcend-</i><br />
            <h2 className="text-4xl font-bold">beyond square footage</h2>
          </div>
          <div className="lab pt-5 sm:w-1/2">
            <p>With a focus on collaboration, attention to detail, and unwavering commitment to quality, we are dedicated to creating beautiful, functional, and enduring spaces.</p>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row mt-10 w-full justify-around">
          <img className='sm:w-3/5 lg-p-0 md:p-0 p-2 mt-5' src="https://www.twosqft.com/wp-content/uploads/2023/02/MicrosoftTeams-image-9-1536x1229.png" alt="about" />
           <div className="flex flex-col text-center items-center justify-center">
            <p>OUR PROJECTS</p>
            <i className='text-3xl'>Commercial</i>
            <p className="underline transtion duration-300 hover:text-orange-200">Learn more</p>
           </div>
        </div>
        <div className="sm:flex mt-10 w-full justify-around">
           <div className="flex flex-col text-center items-center justify-center">
            <p>OUR PROJECTS</p>
            <i className='text-3xl'>Residential</i>
            <p className="underline transtion duration-300 hover:text-orange-200">Learn more</p>
           </div>
           <img className='sm:w-3/5 lg-p-0 md:p-0 p-2 mt-5' src='https://www.twosqft.com/wp-content/uploads/2023/02/MicrosoftTeams-image-3-1536x864.jpg' alt="about" />
        </div>
        </div>
      <div className="sm:flex sm:w-3/5 m-5 pt-8">
        <ul className='w-1/2'>
          <li className='md:text-5xl lg:text-6xl text-3xl'>Creative .</li>
          <li className='md:text-5xl lg:text-6xl text-3xl'>Functional .</li>
          <li className='md:text-5xl lg:text-6xl text-3xl'>Luxurious .</li>
        </ul>
        <ul className='w-1/2'>
          <li className='md:text-5xl lg:text-6xl text-3xl'>Influential .</li>
          <li className='md:text-5xl lg:text-6xl text-3xl'>Landmark .</li>
          <li className='md:text-5xl lg:text-6xl text-3xl'>Expressive .</li>
        </ul>
      </div>
      </section>
      <section>
      <div className="text-black p-8 w-full sm:flex space-x-5 space-y-5  justify-between">
        <div className="md:w-1/2 space-y-5 md:ml-8 justify-around flex flex-col">
          <p>MEET TWOSWFT</p>
          <i className='text-4xl font-semibold'>Creative,and proficient.</i>
        </div>
          <p className="mb-4 sm:w-6/12 text-lg">
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
      <section style={{color:color}} className='pt-24 w-[98%] mx-auto text-white'>
        <div className="border text-white py-3 border-b-0">
          <h1 className='text-center'>THROUGH A UNIQUE COMBINATION OF DESIGN AND ENGINEERING.</h1>
        </div>
          <div className="h-screen w-full border">
            <div className="corsule w-full sm:p-10">
             <div className="corsule-wrapper p-2 flex w-full">
             <div className="wrapper w-1/2">
              <img src="https://www.twosqft.com/wp-content/uploads/2023/06/2.jpeg" alt="" />
              </div>
             <div className="wrapper w-1/2">
             <img src="https://www.twosqft.com/wp-content/uploads/2023/06/r1-1.png" alt="" />
             </div>
             </div>
              <div className="sm:flex md:flex-col lg:flex-row pt-12">
                <div className="flex flex-col  space-y-5 md:w-full md:text-center sm:w-1/2">
                <p className="text-2xl">
                    Functional
                  </p>
                  <h1 className="text-5xl">
                  & User-Friendly <br /> Design.
                  </h1>
                  <p className='md:w-3/5 md:mx-auto'>Experience the perfect fusion of style and usability with our design approach, creating spaces that are both functional and user-friendly.</p>
                </div>
                 <div className="hidden mx-auto pt-10 sm:flex sm:w-1/2 justify-center space-x-8">
                 <div>
                <ul className='flex flex-col space-y-2 text-xl text-gray-300'>
                  <li>Structural Design</li>
                  <li>Architectural Design</li>
                  <li>City Planning</li>
                  <li>Interior Design</li>
                  <li>Urban Design</li>
                </ul>
              </div>
              <div>
                <ul className='flex flex-col space-y-2 text-xl text-gray-300'>
                  <li>Landscape Architecture</li>
                  <li>Renovation</li>
                  <li>Site Planning</li>
                  <li>Project Analysis</li>
                  <li>Construction Plan</li>
                </ul>
              </div>
                 </div>
                </div>            
             </div>
          </div>
          <div className="land-offer pt-10">
            <div className="sm:flex-row flex flex-col border border-black">
              <div className="sm:w-2/5">
                <div className="">
                  <p className="p-3 px-5 ">2.</p>
                </div>
                <div className="p-10 h-[91.5%] space-y-5">
                  <h1 className="text-2xl">Do you have</h1>
                  <h1 className="text-2xl font-bold">a piece of Land</h1>
                  <p>Unlock and maximise the value of your property through a collaborative conversion project with our trusted real-estate builder wing, unlocking mutual success and profitability.</p>
                  <div className="flex justify-center">
                    <button className="p-5 rounded w-52 text-white bg-gray-500">Plan Your Project Today</button>
                  </div>
                </div>
              </div>
              <div className="sm:w-3/5">
                <img className='p-5 mt-5' src="https://www.twosqft.com/wp-content/uploads/2022/03/img-4.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="sm:flex pt-20">
            <h1 className='text-5xl mx-20 pt-5 sm:mb-0 mb-10'>Process</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <ContentSquare
                number="01"
                title="Program"
                description="Gain a competitive edge in the real estate market with our game-changing project program, revolutionizing how projects are conceived and executed."
            />
            <ContentSquare
                number="02"
                title="Concept"
                description="Redefine possibilities and bring your vision to life as we conceptualize your project with our cutting-edge design skills, setting the stage for a remarkable real estate masterpiece."
            />
            <ContentSquare
                number="03"
                title="Design"
                description="Unlock the potential of your real estate project through the ingenuity of our skilled designers and engineers, who blend creativity and technical expertise to shape remarkable designs."
            />
            <ContentSquare
                number="04"
                title="Build"
                description="Experience the art of construction precision with our seasoned civil engineers and construction managers, who bring expertise and meticulousness to every aspect of your real estate project."
            />
             </div>
          </div>
          <div className= "md:h-2/5 mt-10 sm:flex border border-black w-[98%]">
            <div className="wrapper p-5 border border-black border-t-0 border-l-0">
              <img src="https://www.twosqft.com/wp-content/uploads/2022/03/Img.jpg" alt="" />
            </div>
            <div className='sm:w-2/5'>
              <h1 className='text-center p-5 border border-black border-t-0 border-r-0 border-l-0'>3. COMMERCIAL REAL ESTATE</h1>
              <div className="content py-20 p-8 text-center">
                <h1 className="text-2xl">Ready to build wealth through</h1>
                <h1 className="text-xl font-bold">commercial real estate investments?</h1>
                <p>Unleash a world of possibilities for your commercial property through a visionary project developed by our design and construction company, tailored to attract and serve diverse businesses in the restaurant, office, hotel, retail, or mall sectors.</p>
                <div className="flex pt-5 w-full ">
                 <button className='w-40 mx-auto bg-gray-500 p-5 text-white rounded'>learn more</button>
                </div>
              </div>
            </div>
            <div className="wrapper p-5 border border-black border-t-0 border-r-0">
              <img src="https://www.twosqft.com/wp-content/uploads/2022/03/Img-1.jpg" alt="" />
            </div>
          </div>
      </section>
      <Footer />
      </div>
    </>
  )
}

export default Home
