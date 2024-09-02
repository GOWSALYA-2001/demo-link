import React from 'react'
import ChefImage1 from '../assets/img/chefs/chefs-1.jpg';
import ChefImage2 from '../assets/img/chefs/chefs-2.jpg'
import ChefImage3 from '../assets/img/chefs/chefs-3.jpg';
const Chef = () => {
    return (
        // <div className='chefContainer'>
            <div className='chefHead'>
                <div>
                <p>chefs</p>
                <h1>Our <span>Proffesional Chefs</span></h1>
                </div>
            <div className='chefDetails'>
                <div className='chefMain'>
                    <div className='chefImage'>
                        <img src={ChefImage1} alt="image" />
                    </div>
                    <div className='chefMainHead'>
                        <h3>Walter White</h3>
                    </div>
                    <div className='chefMainBody'>
                        <p>Master Chef</p>
                    </div>
                    <div className='chefMainText'>
                        <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                    </div>
                </div>
                <div className='chefMain'>
                    <div className='chefImage'>
                        <img src={ChefImage2} alt="image" />
                    </div>
                    <div className='chefMainHead'>
                        <h3>Sarah Jhonson</h3>
                    </div>
                    <div className='chefMainBody'>
                        <p>Patissier</p>
                    </div>
                    <div className='chefMainText'>
                        <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                    </div>
                </div>
                <div className='chefMain'>
                    <div className='chefImage'>
                        <img src={ChefImage3} alt="image" />
                    </div>
                    <div className='chefMainHead'>
                        <h3>William Anderson</h3>
                    </div>
                    <div className='chefMainBody'>
                        <p>Cook</p>
                    </div>
                    <div className='chefMainText'>
                        <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chef
