import { useState ,useEffect, useRef} from 'react'
import './App.css'
import Navbar from './components/navbar'
import {Routes , Route, useLocation} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Works from './pages/works'
import Discourses from './pages/discourses'
import Contact from './pages/contact'
import Services from './pages/services'
import ProjectDetails from './pages/projectPage'
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
  const [hideNav,setHideNav] = useState('')
  const [color,setColor] = useState(``)
  const location = useLocation()
  const [isScrolling, setIsScrolling] = useState(false);
  const listenScrollEvent = () => {
    const scrollY = window.scrollY;
    
    if(scrollY > 5300){
      setBg('#ffff');
      setColor('black');
    } else if(scrollY > 4800){
      setBg('#d7dedc');
      setColor('black');
    }else if (scrollY > 3800) {
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
    }else if (location.pathname === '/descourses'){
      setBg('gray')
      setColor('black')
    }else{
      setBg('white');
      setColor('black');
    }

  }, [location.pathname]);

 useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        setHideNav(''); 
      }, 200);
      
      setHideNav(true); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.scroll(0,0)
    };
  }, []);

  return (  
    <>
      <div className="App transtion duration-300 ease-out overflow-x-hidden" style={{backgroundColor:bg}} >
       <Navbar hide={hideNav} isCollabOpen={isCollabOpen} setIsCollapOpen={setIsCollapOpen} color={color}/>
       <div onClick={()=>setIsCollapOpen(false)}>
       <Routes>
          <Route path='*' element={<Home hide={hideNav} color={color}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/discourses' element={<Discourses />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/works' element={<Works />} />
          <Route path='/works/:id' element={<ProjectDetails />} />
        </Routes>
       </div>
      </div>
    </>
  )
}

export default App
