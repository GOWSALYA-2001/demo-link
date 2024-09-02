import React from 'react'
import { Button } from '@mui/material';
import HeroImage from '../assets/img/hero-img.png';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
const Homepage = () => {
  return (
    <div className='homeContainer'>
      <div className='homeContent'>
        <div className='homeTitleCont'>
          <h1>Enjoy Your Healthy
            Delicious Food</h1>
            <p>We are team of talented designers making websites with Bootstrap</p>
        </div>
        <div className='homeButtton'>
          <div className='homeBtnTable'>
            <Button>Book a Table</Button>
          </div>
          <div className='homeBtnVideo'>
            <PlayCircleOutlineIcon className='homeicons' /> <span>Watch Video</span>
          </div>
        </div>
      </div>
      <div className='homeImage'>
      <img src={HeroImage} alt="image" />
        {/* <div className='homeImagedis'>
          <img src={HeroImage} alt="image" />
        </div> */}
      </div>

    </div>
  )
}

export default Homepage
