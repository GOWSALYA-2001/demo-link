import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
const Header = (props) => {
  const [isActive, setIsActive] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const handleChange = (navItem) => {
    setIsActive(navItem); 
    if (navItem) {
      props.callBackToHome(navItem);
    }
    setIsSidebarOpen(false); 

  };
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); 
  };

  return (
    <div className='headerContainer'>
      <div className='headerLogo'>
        <div className='headerLogoCont'>
          <h1>Yummy</h1>
        </div>
      </div>

      <div className='headerToggleBtn'>
        <Button onClick={toggleSidebar} style={{ color: "red" }}>{isSidebarOpen ? <CloseIcon/>:<MenuIcon/>}</Button>
      </div>

      <div className={`headerSidebar ${isSidebarOpen ? 'open' : ''}`}>

        <Button className='closeSidebarBtn' onClick={closeSidebar} style={{ color: "red" ,marginLeft:"50%",fontSize:"20px",fontWeight:"900px"}}>X</Button>
        <ul className='navLinks'>
          <li
            id='home'
            onClick={() => handleChange('home')}
            style={{
              color: isActive === 'home' ? 'black' : 'gray',
              borderBottom: isActive === 'home' ? '2px solid red' : 'none',
              cursor: "pointer"
            }}
          >
            Home
          </li>
          <li
            id='about'
            onClick={() => handleChange('about')}
            style={{
              color: isActive === 'about' ? 'black' : 'gray',
              borderBottom: isActive === 'about' ? '2px solid red' : 'none',
              cursor: "pointer"
            }}
          >
            About
          </li>
          <li
            id='menu'
            onClick={() => handleChange('menu')}
            style={{
              color: isActive === 'menu' ? 'black' : 'gray',
              borderBottom: isActive === 'menu' ? '2px solid red' : 'none',
              cursor: "pointer"
            }}
          >
            Menu
          </li>
          <li
            id='events'
            onClick={() => handleChange('events')}
            style={{
              color: isActive === 'events' ? 'black' : 'gray',
              borderBottom: isActive === 'events' ? '2px solid red' : 'none',
              cursor: "pointer"
            }}
          >
            Events
          </li>
          <li
            id='chefs'
            onClick={() => handleChange('chefs')}
            style={{
              color: isActive === 'chefs' ? 'black' : 'gray',
              borderBottom: isActive === 'chefs' ? '2px solid red' : 'none',
              cursor: "pointer"
            }}
          >
            Chefs
          </li>
          <li
            id='gallery'
            onClick={() => handleChange('gallery')}
            style={{
              color: isActive === 'gallery' ? 'black' : 'gray',
              borderBottom: isActive === 'gallery' ? '2px solid red' : 'none',
              cursor: "pointer"
            }}
          >
            Gallery
          </li>
          <li
            id='dropdown'
            onClick={() => handleChange('dropdown')}
            style={{
              color: isActive === 'dropdown' ? 'black' : 'gray',
              borderBottom: isActive === 'dropdown' ? '2px solid red' : 'none',
              cursor: "pointer"
            }}
          >
            Dropdown
          </li>
          <li
            id='contact'
            onClick={() => handleChange('contact')}
            style={{
              color: isActive === 'contact' ? 'black' : 'gray',
              borderBottom: isActive === 'contact' ? '2px solid red' : 'none',
              cursor: "pointer"
            }}
          >
            Contact
          </li>
        </ul>
        <div className='headerBtnCont'>
          <Button>Book a Table</Button>
        </div>
      </div>

      <div className='headerNavs'>
        <div className='headerNavCont'>
          <ul className='navLinks'>
            <li
              id='home'
              onClick={() => handleChange('home')}
              style={{
                color: isActive === 'home' ? 'black' : 'gray',
                borderBottom: isActive === 'home' ? '2px solid red' : 'none',
                cursor: "pointer"
              }}
            >
              Home
            </li>
            <li
              id='about'
              onClick={() => handleChange('about')}
              style={{
                color: isActive === 'about' ? 'black' : 'gray',
                borderBottom: isActive === 'about' ? '2px solid red' : 'none',
                cursor: "pointer"
              }}
            >
              About
            </li>
            <li
              id='menu'
              onClick={() => handleChange('menu')}
              style={{
                color: isActive === 'menu' ? 'black' : 'gray',
                borderBottom: isActive === 'menu' ? '2px solid red' : 'none',
                cursor: "pointer"
              }}
            >
              Menu
            </li>
            <li
              id='events'
              onClick={() => handleChange('events')}
              style={{
                color: isActive === 'events' ? 'black' : 'gray',
                borderBottom: isActive === 'events' ? '2px solid red' : 'none',
                cursor: "pointer"
              }}
            >
              Events
            </li>
            <li
              id='chefs'
              onClick={() => handleChange('chefs')}
              style={{
                color: isActive === 'chefs' ? 'black' : 'gray',
                borderBottom: isActive === 'chefs' ? '2px solid red' : 'none',
                cursor: "pointer"
              }}
            >
              Chefs
            </li>
            <li
              id='gallery'
              onClick={() => handleChange('gallery')}
              style={{
                color: isActive === 'gallery' ? 'black' : 'gray',
                borderBottom: isActive === 'gallery' ? '2px solid red' : 'none',
                cursor: "pointer"
              }}
            >
              Gallery
            </li>
            <li
              id='terminology'
              onClick={() => handleChange('terminology')}
              style={{
                color: isActive === 'dropdown' ? 'black' : 'gray',
                borderBottom: isActive === 'dropdown' ? '2px solid red' : 'none',
                cursor: "pointer"
              }}
            >
             Terminology
            </li>
            <li
              id='contact'
              onClick={() => handleChange('contact')}
              style={{
                color: isActive === 'contact' ? 'black' : 'gray',
                borderBottom: isActive === 'contact' ? '2px solid red' : 'none',
                cursor: "pointer"
              }}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className='headerBtn'>
        <div className='headerBtnCont'>
          <Button>Book a Table</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;