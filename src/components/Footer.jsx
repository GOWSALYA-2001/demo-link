import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footermainContainer'>
                <div className='footerAddress'>
                    <div className='footerAddressIcon'>
                        <PlaceIcon className='footerIcons'/>
                    </div>
                    <div className='footerAddressCont'>
                        <p className='addressTitle'>Address</p>
                        <p className='addressText'>Name: A108 Adam Street<br/>
                           New York, NY 535022</p>
                    </div>
                </div>
                <div className='footerAddress'>
                    <div className='footerAddressIcon'>
                        <CallIcon className='footerIcons' />
                    </div>
                    <div className='footerAddressCont'>
                        <p className='addressTitle'>Contact</p>
                        <p className='addressText'>Phone: +1 5589 55488 55<br/>
                        Email: info@example.com</p>
                    </div>
                </div>
                <div className='footerAddress'>
                    <div className='footerAddressIcon'>
                        <AccessTimeIcon className='footerIcons' />
                    </div>
                    <div className='footerAddressCont'>
                        <p className='addressTitle'>Opening Hours</p>
                        <p className='addressText'>Mon-Sat: 11AM - 23PM<br/>
                        Sunday: Closed</p>
                    </div>
                </div>
                
                <div className='footerFollows'>
                    <div className='footerAddressLocation'>
                        <div className='footerLocation'>
                            <div className='footerName'>
                                <h3>Follow Us</h3>
                            </div>

                            <div className='footerAddressText'>
                                <XIcon className='footerSocialIcons' />
                                <FacebookIcon className='footerSocialIcons' />
                                <InstagramIcon className='footerSocialIcons' />
                                <LinkedInIcon className='footerSocialIcons' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
