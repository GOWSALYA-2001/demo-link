import './index.css';
import Header from './components/Header.jsx';
import Homepage from './components/Homepage.jsx';
// import { Route, Routes, useLocation } from 'react-router-dom';
import Aboutpage from './components/About.jsx';
import Choosepage from './components/Choose.jsx';
import Eventpage from './components/Events.jsx';
import Menupage from './components/Menu.jsx';
import Terminologypage from './components/Terminology.jsx';
import Chefpage from './components/Chef.jsx';
import Tablepage from './components/Table.jsx';
import Gallerypage from './components/Gallery.jsx';
import Footerpage from './components/Footer.jsx';
import Copyrightspage from './components/Copyrights.jsx';
import { useState, useRef ,useEffect} from 'react';

function App() {
 
  const[navItem,setNavItem] = useState("");
  const headerfocus = useRef();
  const homefocus = useRef(null);
  const aboutfocus = useRef(null);
  const menufocus = useRef(null);
  const eventfocus = useRef(null);
  const galleryfocus = useRef(null);
  const termifocus = useRef(null);
  const chefocus = useRef(null);
  const footerfocus= useRef(null);

  const callBackToHome = (data) => {
    setNavItem(data);
    console.log(data);
    if(data==="home"){
      homefocus.current.scrollIntoView({ behavior: 'smooth' });
    }else if (data === "about") {
      aboutfocus.current.scrollIntoView({ behavior: 'smooth' });
    }else if(data === "menu"){
      menufocus.current.scrollIntoView({ behavior: 'smooth' });
    }else if (data === "events") {
      eventfocus.current.scrollIntoView({ behavior: 'smooth' });
    }else if (data === "terminology") {
      termifocus.current.scrollIntoView({ behavior: 'smooth' });
    }else if (data === "gallery") {
      galleryfocus.current.scrollIntoView({ behavior: 'smooth' });
    }else if (data === "chefs") {
      chefocus.current.scrollIntoView({ behavior: 'smooth' });
    }else if (data === "contact") {
      footerfocus.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    headerfocus.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <section className='headerSec' ref={headerfocus} tabIndex="-1" >
        <div className='container'>
          <Header callBackToHome={callBackToHome} />
        </div>
      </section>

      <section className='homeSec' ref={homefocus} tabIndex="-1">
        <div className='container'>
          <Homepage />
        </div>
      </section>

     <section className='AboutSec' ref={aboutfocus} tabIndex="-1">
        <div className='container'>
          <Aboutpage />
        </div>
      </section>  
      
      <section className='menuSec' ref={menufocus} tabIndex="-1" >
        <div className='container' >
          <Menupage />
        </div>
      </section>

      <section className='ChooseSec' ref={eventfocus} tabIndex="-1">
        <div className='container'>
          <Choosepage />
        </div>
      </section>

      {/* <section className='eventSec'>
         <div className='layer'></div> 
        <div className='container'>
          <Eventpage />
        </div>
      </section> */}

      <section className='termSec' ref={termifocus} tabIndex="-1">
        <div className='container'>
          <Terminologypage />
        </div>
      </section>

      <section className='chefSec' ref={chefocus} tabIndex="-1">
        <div className='container'>
          <Chefpage />
        </div>
      </section>

      {/* <section className='tableSec'>
        <div className='container'>
          <Tablepage />
        </div>
      </section> */}

      <section className='gallerySec' ref={galleryfocus} tabIndex="-1">
        {/* <span id="gallery" tabIndex={-1}></span> */}
        <div className='container'>
          <Gallerypage />
        </div>
      </section>

      <section className='footerSec' ref={footerfocus} tabIndex="-1">
        <div className='container'>
          <Footerpage />
        </div>
      </section>

      <section className='copySec' id={'contact'}>
        <div className='container'>
          <Copyrightspage />
        </div>
      </section>
    </>
  )
}

export default App
