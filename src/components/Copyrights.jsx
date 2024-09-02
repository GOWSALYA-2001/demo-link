import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Copyrights = () => {
    return (
        <div className='footerAbout'>
            <div className='footerAboutCont'>
                <CopyrightIcon className='footerCopyIcon' />
                <p>Copyright <span>Yummy</span> All Rights Reserved</p>
            </div>
            <div className='footerText'>
                <p>Designed by <span>BootstrapMade</span></p>
            </div>
        </div>
    )
}

export default Copyrights
