import React from 'react'
import ChairImage from '../assets/img/about.jpg';
import VideoImage from '../assets/img/about-2.jpg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
const About = () => {
    return (

        <div className='aboutHead'>
            <p>About Us</p>
            <h1>Learn More <span>About Us</span></h1>

            <div className='aboutMainContainer'>
                <div className='aboutImage'>
                    <div className='aboutImgLoad'>
                        <img src={ChairImage} alt="image" />
                    </div>
                    <div className='aboutTable'>
                        <div className='TableCont'>
                            <h2>Book a Table</h2>
                            <h1>+1 5589 55488 55</h1>
                        </div>
                    </div>
                </div>
                <div className='aboutText'>
                    <div className='aboutTextHead'>
                        <div className='Texthead'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className='checkBar'>
                            <div className='checkBarIcon'>
                                <CheckCircleIcon className='aboutIcons' />
                            </div>
                            <div className='checkBarCont'>
                                <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </div>
                        </div>
                        <div className='checkBar'>
                            <div className='checkBarIcon'>
                                <CheckCircleIcon className='aboutIcons' />
                            </div>
                            <div className='checkBarCont'>
                                <span>Duis aute irure dolor in reprehenderit in voluptate elit.</span>
                            </div>
                        </div>
                        <div className='checkBar'>
                            <div className='checkBarIcon'>
                                <CheckCircleIcon className='aboutIcons' />
                            </div>
                            <div className='checkBarCont'>
                                <span> Ullamco laboris nisi ut aliquip ex ea commodo 
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore
                                    eu fugiat nulla pariatur.</span>
                            </div>
                        </div>
                    </div>
                    <div className='aboutTextBody'>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur.Excepteur sint occaecat cupidatat non proident
                    </div>
                    <div className='aboutVideo'>
                        <img src={VideoImage} alt="video" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
