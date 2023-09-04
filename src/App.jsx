import { useState ,useEffect} from 'react'
import './App.css'
import Navbar from './components/navbar'
import {Routes , Route, useLocation} from 'react-router-dom'
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
  const [bg,setBg] = useState(``)
  const [color,setColor] = useState(``)
  const location = useLocation()

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
    if (location.pathname === '/') {
      setBg('rgb(28 28 28)');
      setColor('white');
      window.addEventListener('scroll', listenScrollEvent);
      return () => {
        window.removeEventListener('scroll', listenScrollEvent);
      };
    } else {
      // Set background to white on other pages
      setBg('white');
      setColor('black');
    }
  }, [location.pathname]);

  return (  
    <>
      <div className="App transtion duration-300 ease-out" style={{backgroundColor:bg}}>
       <Navbar isCollabOpen={isCollabOpen} setIsCollapOpen={setIsCollapOpen} color={color}/>
       <div onClick={()=>setIsCollapOpen(false)}>
       <Routes>
          <Route path='*' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/discourses' element={<Discourses />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sevices' element={<Services />} />
          <Route path='/works' element={<Works />} />
        </Routes>
       </div>
      </div>
    </>
  )
}

export default App
