import IntroWithAccordion from '../components/section';
import { motion } from 'framer-motion';
import { useState , useEffect} from 'react';
import { PageFooter } from '../components/footer';

// sections data
const introData = [
  {
    title: 'Architecture Design and Construction',
    imageSrc: 'https://www.twosqft.com/wp-content/uploads/2022/04/1-748x512.jpg',
    services: {
      description:
        "With a team of exceptional architects, engineers, and construction professionals, we bring dreams to life. From concept to completion, we meticulously craft functional and aesthetically pleasing spaces that cater to your unique needs. Whether it's designing a stunning residential property or developing a commercial masterpiece, our expertise and attention to detail ensure that every project is a true reflection of excellence.",
      sectionNumber: '01',
      items: [
        {
          title: 'Architectural Planning and Design',
          content: 'we breathe life into buildings, harmonizing form and function to create awe-inspiring structures that stand as testaments to human creativity and vision.',
        },
        {
          title: 'Structure Design',
          content: 'we craft robust and meticulously engineered frameworks that provide strength, stability, and elegance, transforming mere blueprints into resilient marvels that defy gravity and inspire wonder.',
        },
        {
          title: 'MEP Design',
          content: 'we combine mechanical, electrical, and plumbing systems with precision and innovation, optimizing building functionality and comfort.',
        },
      ],
    },
  },
  {
    title: 'Interior Design and Fit-out',
    imageSrc: 'https://www.twosqft.com/wp-content/uploads/2022/04/2-1536x1050.jpg',
    services: {
      description:
        'Our interior design and fit-out services combine creativity, functionality, and impeccable craftsmanship. Our talented team of designers works closely with you to understand your vision, infusing it with innovative design solutions and carefully curated materials. From residential interiors to commercial spaces, we create environments that inspire and enhance the way you live and work.',
      sectionNumber: '02',
      items: [
        {
          title: 'Modular Kitchens, Wardrobes, and Fixed Carpentry',
          content: 'We expertly craft modular kitchens, wardrobes, and fit-outs, revolutionizing spaces through exceptional interior design solutions that enhance functionality and style.',
        },
        {
          title: 'Custom Home Automation',
          content: "We specialize in customized home automation solutions, seamlessly integrating cutting-edge technology with bespoke interior design to meet our clients' unique lifestyle needs.",
        },
        {
          title: 'Customized Furniture',
          content: 'We specialize in crafting tailor-made furniture, meticulously manufacturing custom pieces that perfectly complement and enhance every project\'s unique interior design vision.',
        },
      ],
    },
    left:true,
  },
  {
    title: 'Real Estate Development',
    imageSrc: 'https://www.twosqft.com/wp-content/uploads/2022/04/1-748x512.jpg',
    services: {
      description:
        'Our team excels at identifying opportunities and creating remarkable properties that stand the test of time. From initial market research and feasibility studies to strategic planning and execution, we handle every aspect of the development process with precision and professionalism. Our commitment to quality, sustainability, and creating thriving communities sets us apart in the real estate industry.',
      sectionNumber: '02',
      items: [
        {
          title: 'Residental',
          content: 'We shape residential landscapes through diverse-scale real estate developments.          ',
        },
        {
          title: 'Commercial/ Mixed use',
          content: "We craft dynamic commercial and mixed-use developments of varying typologies and scales.",
        },
        {
          title: 'Holiday Homes that can earn you money',
          content: 'We construct profitable properties for clients to purchase and capitalize on as lucrative investment properties.',
        },
      ],
    },
  }
];

function services() {
  const greetings = ['​hallo','namaste','merhaba','niltze','salve'];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3500);

    return () => clearTimeout(timer);
  }, [currentGreetingIndex, greetings]);
  return (
   <>
      <div>
      <section className='space-y-5 pt-8 w-11/12 mx-auto'>
      <div className="flex flex-col justify-between h-[40vh] title w-11/12 mx-auto mb-10 border-b-[1px] border-black">
           <div className="top">
           <span className="rounded-full p-1 text-sm px-3 bg-black text-white font-semibold">OUR SERVICES</span>
            <br />
            <i className="text-5xl font-semibold">Design</i>
            <h1 className="font-semibold text-6xl">and Build</h1>
           </div>
           <span>01</span>
        </div>
      <div className="grid sm:grid-cols-3 space-y-5 mb-5">
      <div className="title sm:w-[80%]">
      <span className="my-5 rounded-full p-1 text-sm w-28 bg-gray-200 text-black font-semibold flex justify-center">SERVICE</span>
      <h1 className="text-3xl font-semibold">We offer comprehensive design and build solutions, providing end-to-end services for all your project needs.</h1>  
      <div className="review">
      <h1 className="text-5xl my-5 font-bold">9.81</h1>
      <p>TrustPilot Review</p>
      <ul className="flex space-x-2">
                <li>★</li>
                <li>★</li>
                <li>★</li>
                <li>★</li>
                <li>★</li>
             </ul>
      </div>
      </div>
      <ul className='text-3xl space-y-2 sm:space-y-5'>
                <li>Projects</li>
                <li>Sustainability</li>
                <li>People and More</li>
                <li>Market Research</li>
                <li>The Building Process</li>
                <li>Research-Development</li>
              </ul>
      <div className="parag sm:w-64">
      We provide clients with comprehensive design and build solutions, ensuring seamless processes from concept to execution. Our experienced team delivers exceptional results, upholding the highest standards of quality and craftsmanship. With end-to-end services, we guarantee client satisfaction in designing spaces and constructing structures. Trust our professionalism and expertise for your project needs.
      </div>
      </div>
      </section>
      <section>
      {introData.map((data , i)=>(
         <IntroWithAccordion key={i}  {...data}/>
      ))}
      </section>
      <section className='w-11/12 mx-auto'>
        <div className="sm:w-11/12 mx-auto text-center">
        <motion.h2 className="text-3xl  text-black font-semibold">
        Have a project in mind?<br />
        Do not hesitate to say <br />
        <motion.span
          key={currentGreetingIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }} 
        >
          {greetings[currentGreetingIndex]}
        </motion.span>
      </motion.h2>  
      <button className="p-5 text-sm border">LET'S BUILD</button>
       <div className="contact w-1/2 text-center mx-auto">
        <p className="text-sm">Looking for collaboration?</p>
        <h1 className="border-b-2 border-black font-semibold text-xl py-5">CONTACT US</h1>
        <p className='text-gray-500 py-2'>I’m interested in working together</p>
        <p className='text-gray-500 py-3 border-b-2 border-black'>(+91)8294373340</p>
        <p className='text-gray-500 py-3'>Have a project in mind? Send a message.</p>
        <p className='text-gray-500'>hello@twosqft.com</p>
       </div>
        </div>
      </section>
      <PageFooter />
      </div>
   </>
  );
}

export default services;
