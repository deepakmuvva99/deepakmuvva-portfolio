import React from 'react'
import {useState} from "react"
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"
import { Home } from './components/sections/Home.jsx'
import { About } from './components/sections/About.jsx'
import { Projects } from './components/sections/Projects.jsx'
import { Contact } from './components/sections/Contact.jsx'
// import { Footer } from './components/sections'
import { Navbar } from './components/Navbar.jsx'
import { Mobilemenu } from './components/Mobilemenu.jsx'

const App = () => {
   const [IsLoaded, setIsLoaded] = useState(false);
   const [menuopen,setmenuopen]=useState(false);

  return  (
  <>{!IsLoaded && <LoadingScreen onComplete={()=>setIsLoaded(true)}/>}{""}
  <div className={`min-h-screen transition-opacity duration-700 ${IsLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100 ` }>
    <Navbar menuopen={menuopen} setmenuopen={setmenuopen}/>
    <Mobilemenu menuopen={menuopen} setmenuopen={setmenuopen}/>
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
  </div>
  </>
  );
}

export default App