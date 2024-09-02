import React from 'react';
import { Button } from '@mui/material';
import DataImage from '../assets/img/data.png';
import AnalyticsImage from '../assets/img/analytics.png';
import CircleImage from '../assets/img/circle.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import DiamondIcon from '@mui/icons-material/Diamond';
import AllInboxIcon from '@mui/icons-material/AllInbox';

const Choose = () => {
    return (
        // <div className='chooseContainer'>
            <div className='choosemain'>
                <div className='choosetrend'>
                    <div className='chooseHead'>
                        <h1> Why Choose Yummy</h1>
                    </div>
                    <div className='chooseText'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
                    </div>
                    <div className='chooseButton'>
                        <Button>Learn More<KeyboardArrowRightIcon /></Button>
                    </div>
                </div>
                <div className='choosestyle'>
                    <div className='chooseImage'>
                        <InsertChartIcon className='chooseIcons' />
                    </div>
                    <div className='styleHead'>
                        <h3>Corporis voluptates officia eiusmod</h3>
                    </div>
                    <div className='styleText'>
                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>


                    {/* <div className='chooseHeading'>
                        <h3>Corporis voluptates officia eiusmod</h3>
                    </div>
                    <div className='chooseBodys'>
                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    
                    </div> */}
                </div>
                <div className='choosestyle'>
                    <div className='chooseImage'>
                        <DiamondIcon className='chooseIcons' />
                    </div>
                    <div className='styleHead'>
                        <h3>Ullamco laboris ladore  lore pan pro </h3>
                    </div>

                    <div className='styleText'>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>


                    {/* <div className='chooseHeading'>
                        <h3>Ullamco laboris ladore lore pan eiusmod</h3>
                    </div>
                    <div className='chooseBodys'>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div> */}
                </div>
                <div className='choosestyle'>
                    <div className='chooseImage'>
                        <AllInboxIcon className='chooseIcons' />
                    </div>
                    <div className='styleHead'>
                        <h3>Labore consequatur incidid dolore</h3>
                    </div>

                    <div className='styleText'>
                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                    </div>


                    {/* <div className='chooseHeading'>
                        <h3>Labore consequatur incidid dolore</h3>
                    </div>
                    <div className='chooseBodys'>
                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                    </div> */}
                </div>
            </div>

        // </div>
    )
}

export default Choose
