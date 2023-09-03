import { useState ,useEffect} from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Works from './pages/works'
import Discourses from './pages/discourses'
import Contact from './pages/contact'
import Services from './pages/services'

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

function App() {
  const [isCollabOpen, setIsCollapOpen] = useState(false);
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

  return (  
    <>
      <div className="App transtion duration-300 ease-out" style={{backgroundColor:bg}}>
       <Navbar isCollabOpen={isCollabOpen} setIsCollapOpen={setIsCollapOpen} color={color}/>
       <div onClick={()=>setIsCollapOpen(false)}>
       <Routes>
          <Route path='/*' element={<Home/>} />
          <Route path='/*/about' element={<About />} />
          <Route path='/*/discourses' element={<Discourses />} />
          <Route path='/*/contact' element={<Contact />} />
          <Route path='/*/sevices' element={<Services />} />
          <Route path='/*/works' element={<Works />} />
        </Routes>
       </div>
      </div>
    </>
  )
}

export default App
