import React from 'react'
import { Slide } from 'react-slideshow-image'
// import img1 from '../images/carrelage1.jpg'
// import img2 from '../images/carrelage2.jpg'
// import img3 from '../images/carrelage3.jpg'
import img1 from '../images/carrelage11.jpg'
import img2 from '../images/carrelage21.jpg'
import img3 from '../images/carrelage31.jpg'
import img4 from '../images/img1.jpg'
import img5 from '../images/img2.jpg'
import img6 from '../images/img3.jpg'
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
      url: `${img4}`,
      caption: ''
    },
    {
      url:  `${img2}`,
      caption: ''
    },
    {
      url:  `${img3}`,
      caption: ''
    },
    {
      url: `${img5}`,
      caption: ''
    },
  ];
  
  const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div className="each-slide" key={index}>
                <div className="can" style={{'backgroundImage': `url(${slideImage.url})`}}>
                  <span>{slideImage.caption}</span>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      )
  }

export default Slideshow;