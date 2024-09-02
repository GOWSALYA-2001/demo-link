import React from 'react'
import MenuItem1 from '../assets/img/menu/menu-item-1.png';
import MenuItem2 from '../assets/img/menu/menu-item-2.png';
import MenuItem3 from '../assets/img/menu/menu-item-3.png';
import MenuItem4 from '../assets/img/menu/menu-item-4.png';
import MenuItem5 from '../assets/img/menu/menu-item-5.png';
import MenuItem6 from '../assets/img/menu/menu-item-6.png';
const Menu = () => {
    return (
        <div className='menuContainer'>
            <div className='menuTitle'>
                <div>
                <p>Our menu</p>
                <h1>Check Our <span>Yummy Menu</span></h1>
                </div>
                
            </div>
            {/* <div className='menuNav'>
                <ul>
                    <li>Starters</li>
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                </ul>
            </div> */}
            <div className='menuBody'>
                <div>
                <p>menu</p>
                <h1>Starters</h1>
                </div>
            </div>
            <div className='menuTrend'>
                <div className='TrendContainer'>
                    <div className='TrendImage'>
                        <img src={MenuItem1} alt="dishimage" />
                    </div>
                    <div className='TrendHead'>
                        <h3>Magnam Tiste</h3>
                    </div>
                    <div className='TrendBody'>
                        <p>Lorem, deren, trataro, filede, nerada</p>
                    </div>
                    <div className='TrendRupees'>
                        <h3>$5.95</h3>
                    </div>
                </div>
                <div className='TrendContainer'>
                    <div className='TrendImage'>
                        <div className='TrendImageCont'>
                            <img src={MenuItem2} alt="dishimage" />
                        </div>
                    </div>
                    <div className='TrendHead'>
                        <div className='TrendHeadCont'>
                            <h3>Aut Luia</h3>
                        </div>
                    </div>
                    <div className='TrendBody'>
                        <div className='TrendBodyCont'>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                        </div>
                    </div>
                    <div className='TrendRupees'>
                        <div className='TrendRupeesCont'>
                            <h3>$14.95</h3>
                        </div>
                    </div>
                </div>
                <div className='TrendContainer'>
                    <div className='TrendImage'>
                        <div className='TrendImageCont'>
                            <img src={MenuItem3} alt="dishimage" />
                        </div>
                    </div>
                    <div className='TrendHead'>
                        <div className='TrendHeadCont'>
                            <h3>Est Eligendi</h3>
                        </div>
                    </div>
                    <div className='TrendBody'>
                        <div className='TrendBodyCont'>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                        </div>
                    </div>
                    <div className='TrendRupees'>
                        <div className='TrendRupeesCont'>
                            <h3>$8.95</h3>
                        </div>
                    </div>
                </div>
                <div className='TrendContainer'>
                    <div className='TrendImage'>
                        <div className='TrendImageCont'>
                            <img src={MenuItem4} alt="dishimage" />
                        </div>
                    </div>
                    <div className='TrendHead'>
                        <div className='TrendHeadCont'>
                            <h3>Eos Luibusdam</h3>
                        </div>
                    </div>
                    <div className='TrendBody'>
                        <div className='TrendBodyCont'>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                        </div>
                    </div>
                    <div className='TrendRupees'>
                        <div className='TrendRupeesCont'>
                            <h3>$12.95</h3>
                        </div>
                    </div>
                </div>
                <div className='TrendContainer'>
                    <div className='TrendImage'>
                        <div className='TrendImageCont'>
                            <img src={MenuItem5} alt="dishimage" />
                        </div>
                    </div>
                    <div className='TrendHead'>
                        <div className='TrendHeadCont'>
                            <h3>Eos Luibusdam</h3>
                        </div>
                    </div>
                    <div className='TrendBody'>
                        <div className='TrendBodyCont'>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                        </div>
                    </div>
                    <div className='TrendRupees'>
                        <div className='TrendRupeesCont'>
                            <h3>$12.95</h3>
                        </div>
                    </div>
                </div>
                <div className='TrendContainer'>
                    <div className='TrendImage'>
                        <div className='TrendImageCont'>
                            <img src={MenuItem6} alt="dishimage" />
                        </div>
                    </div>
                    <div className='TrendHead'>
                        <div className='TrendHeadCont'>
                            <h3>Laboriosam </h3>
                        </div>
                    </div>
                    <div className='TrendBody'>
                        <div className='TrendBodyCont'>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                        </div>
                    </div>
                    <div className='TrendRupees'>
                        <div className='TrendRupeesCont'>
                            <h3>$9.95</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
