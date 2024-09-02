import React, { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import GalleryImage1 from '../assets/img/gallery/gallery-1.jpg';
import GalleryImage2 from '../assets/img/gallery/gallery-2.jpg';
import GalleryImage3 from '../assets/img/gallery/gallery-3.jpg';
import GalleryImage4 from '../assets/img/gallery/gallery-4.jpg';
import GalleryImage5 from '../assets/img/gallery/gallery-5.jpg';
import GalleryImage6 from '../assets/img/gallery/gallery-6.jpg';
import GalleryImage7 from '../assets/img/gallery/gallery-7.jpg';
import GalleryImage8 from '../assets/img/gallery/gallery-8.jpg';

const Gallery = () => {
    const [isVisible, setIsVisible] = useState(1);
    const [isvisibleimg, setVisibleImg] = useState(GalleryImage1);
    const handleChange = (data, img) => {
        setIsVisible(data);
        setVisibleImg(img);
    }

    setTimeout(() => {
        let isDisplay = isVisible;
        if (isDisplay === 8) {
            setIsVisible(1);
            setVisibleImg(GalleryImage1);
        } else {
            isDisplay = isDisplay + 1;
            if (isDisplay === 1) {
                setIsVisible(isDisplay);
                setVisibleImg(GalleryImage1);
            } else if (isDisplay === 2) {
                setIsVisible(isDisplay);
                setVisibleImg(GalleryImage2);
            } else if (isDisplay === 3) {
                setIsVisible(isDisplay);
                setVisibleImg(GalleryImage3);
            } else if (isDisplay === 4) {
                setIsVisible(isDisplay);
                setVisibleImg(GalleryImage4);
            } else if (isDisplay === 5) {
                setIsVisible(isDisplay);
                setVisibleImg(GalleryImage5);
            } else if (isDisplay === 6) {
                setIsVisible(isDisplay);
                setVisibleImg(GalleryImage6);
            } else if (isDisplay === 7) {
                setIsVisible(isDisplay);
                setVisibleImg(GalleryImage7);
            } else if (isDisplay === 8) {
                setIsVisible(isDisplay);
                setVisibleImg(GalleryImage8);
            } 
        }
    },3000)

    return (
        // <div className='galleryContainer'>
            <div className='galleryTitle'>
                <div>
                    <p>Gallery</p>
                    <h1>Check <span>Our Gallery</span></h1>
                </div>
          
            <div className='galleryMain'>
                {isVisible === 1 ? null : <div className='galleryMainImg'>
                    <img src={GalleryImage1} alt="image" />
                </div>}
                {isVisible === 2 ? null : <div className='galleryMainImg'>
                    <img src={GalleryImage2} alt="image" />
                </div>}
                {isVisible === 3 ? null : <div className='galleryMainImg'>
                    <img src={GalleryImage3} alt="image" />
                </div>}
                {isVisible === 4 ? null : <div className='galleryMainImg'>
                    <img src={GalleryImage4} alt="image" />
                </div>}
                {isvisibleimg ? <div className='galleryMainImg'>
                    <img src={isvisibleimg} alt="image" style={{ border: "2px solid red", padding: "5px" }} />
                </div> : null}
                {isVisible === 5 ? null : <div className='galleryMainImg'>
                    <img src={GalleryImage5} alt="image" />
                </div>}
                {isVisible === 6 ? null : <div className='galleryMainImg'>
                    <img src={GalleryImage6} alt="image" />
                </div>}
                {isVisible === 7 ? null : <div className='galleryMainImg'>
                    <img src={GalleryImage7} alt="image" />
                </div>}
                {isVisible === 8 ? null : <div className='galleryMainImg'>
                    <img src={GalleryImage8} alt="image" />
                </div>}
            </div>
            <div className='galleryPoint'>
                <CircleIcon className='galleryCircleicon' onClick={() => handleChange(1, GalleryImage1)} style={isVisible === 1 ? { color: "red" } : null} />
                <CircleIcon className='galleryCircleicon' onClick={() => handleChange(2, GalleryImage2)} style={isVisible === 2 ? { color: "red" } : null} />
                <CircleIcon className='galleryCircleicon' onClick={() => handleChange(3, GalleryImage3)} style={isVisible === 3 ? { color: "red" } : null} />
                <CircleIcon className='galleryCircleicon' onClick={() => handleChange(4, GalleryImage4)} style={isVisible === 4 ? { color: "red" } : null} />
                <CircleIcon className='galleryCircleicon' onClick={() => handleChange(5, GalleryImage5)} style={isVisible === 5 ? { color: "red" } : null} />
                <CircleIcon className='galleryCircleicon' onClick={() => handleChange(6, GalleryImage6)} style={isVisible === 6 ? { color: "red" } : null} />
                <CircleIcon className='galleryCircleicon' onClick={() => handleChange(7, GalleryImage7)} style={isVisible === 7 ? { color: "red" } : null} />
                <CircleIcon className='galleryCircleicon' onClick={() => handleChange(8, GalleryImage8)} style={isVisible === 8 ? { color: "red" } : null} />
            </div>
        </div>
    )
}

export default Gallery
