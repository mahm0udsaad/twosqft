import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import TextAnimation from './components/header'

function App() {
  const [isCollabOpen, setIsCollapOpen] = useState(false);

  return (
    <>
      <section className='main'>
       <Navbar isCollabOpen={isCollabOpen} setIsCollapOpen={setIsCollapOpen}/>
        <div className="container h-screen" onClick={()=>setIsCollapOpen(false)}>
        <TextAnimation />
        </div>
      </section>
    </>
  )
}

export default App
