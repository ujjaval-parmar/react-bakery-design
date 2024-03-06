import React, { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import New from './components/New'
import About from './components/About'
import Favorites from './components/Favorites'
import Visit from './components/Visit'
import Footer from './components/Footer'

const App = () => {

  const [isScroll, setIsScroll] = useState(false);

  

  

  useEffect(()=>{

      const handleScroll = e =>{
        
          if(window.scrollY > 50){
              setIsScroll(true);
          }else{
              setIsScroll(false);
          }
          
      }
      window.addEventListener('scroll', handleScroll);


      return ()=> window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <>

      <Header isScroll={isScroll} />

      <main className='main'>

        <Home />

        <New />

        <About/>

        <Favorites />

        <Visit />

      </main>

      <Footer />

      {isScroll && <a href="#home" className="scrollup" id="scroll-up"><i className="fa-solid fa-arrow-up"></i></a> }


    </>
  )
}

export default App