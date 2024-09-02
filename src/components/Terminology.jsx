import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import CircleIcon from '@mui/icons-material/Circle';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TestimonialsImage1 from '../assets/img/testimonials/testimonials-1.jpg';
import TestimonialsImage2 from '../assets/img/testimonials/testimonials-2.jpg';
import TestimonialsImage3 from '../assets/img/testimonials/testimonials-3.jpg';
import TestimonialsImage4 from '../assets/img/testimonials/testimonials-4.jpg';

const Terminology = () => {
    const [termDisplay, setTermDisplay] = useState(1);

    const handleChange = (data) => {
        setTermDisplay(data)
    };

    // useEffect(() => {
    setTimeout(() => {
        let displayCont = termDisplay
        if (displayCont === 4) {
            setTermDisplay(1)
        } else {
            displayCont = displayCont + 1;
            setTermDisplay(displayCont)
        }
    }, 3000);
    // },[termDisplay]);


    return (
        // <div className='termContainer'>
            <div className='termHead'>
                <div>
                    <p>TESTIMONIALS</p>
                    <h1>What Are They <span>Saying About Us</span></h1>
                </div>
          
            {termDisplay === 1 ? <div className='termTrend'>
                <div className='termAbout'>
                    <div className='termAboutHead'>
                        <h2><FormatQuoteIcon className='forwardIcons' />Export tempor illum tamen malis malis
                            eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore
                            eram velit sunt aliqua noster fugiat irure amet legam anim culpa.<FormatQuoteIcon className='forwardIcons' /></h2>
                        <h3>Saul GoodMan</h3>
                        <h4>CEO & Founder</h4>
                    </div>
                    <div className='termAboutStar'>
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                    </div>
                </div>

                <div className='termImage'>
                    <img src={TestimonialsImage1} alt="image" />
                </div>
            </div> : null}
            {termDisplay === 2 ? <div className='termTrend'>
                <div className='termAbout'>
                    <div className='termAboutHead'>
                        <h2><FormatQuoteIcon className='forwardIcons' />culpa opposed to using 'Content here, content here', making it look like readable English. 
                        Many desktop publishing packages and web page editors now use Lorem Ipsum<FormatQuoteIcon className='forwardIcons' /></h2>
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                    </div>
                    <div className='termAboutStar'>
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                    </div>
                </div>

                <div className='termImage'>
                    <img src={TestimonialsImage2} alt="image" />
                </div>
            </div> : null}
            {termDisplay === 3 ? <div className='termTrend'>
                <div className='termAbout'>
                    <div className='termAboutHead'>
                        <h2><FormatQuoteIcon className='forwardIcons' /> malis quem cillum quid cillum majority have suffered alteration in some form, 
                        by injected humour, or randomised words which don't look even slightly believable <FormatQuoteIcon className='forwardIcons' /></h2>
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                    </div>
                    <div className='termAboutStar'>
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                    </div>
                </div>

                <div className='termImage'>
                    <img src={TestimonialsImage3} alt="image" />
                </div>
            </div> : null}
            {termDisplay === 4 ? <div className='termTrend'>
                <div className='termAbout'>
                    <div className='termAboutHead'>
                        <h2><FormatQuoteIcon className='forwardIcons' />Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                         discovered the undoubtable source.<FormatQuoteIcon className='forwardIcons' /></h2>
                        <h3>John Lorson</h3>
                        <h4>Entrepreneur</h4>
                    </div>
                    <div className='termAboutStar'>
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                        <StarIcon className='starIcons' />
                    </div>
                </div>

                <div className='termImage'>
                    <img src={TestimonialsImage4} alt="image" />
                </div>
            </div> : null}
            <div className='termPoint'>
                <CircleIcon style={termDisplay === 1 ? { color: "red" } : null} className='circleIcon' onClick={() => handleChange(1)} />
                <CircleIcon style={termDisplay === 2 ? { color: "red" } : null} className='circleIcon' onClick={() => handleChange(2)} />
                <CircleIcon style={termDisplay === 3 ? { color: "red" } : null} className='circleIcon' onClick={() => handleChange(3)} />
                <CircleIcon style={termDisplay === 4 ? { color: "red" } : null} className='circleIcon' onClick={() => handleChange(4)} />
            </div>
        </div>
        
    )
}

export default Terminology
