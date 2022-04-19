import React from 'react'
import { Slide } from 'react-slideshow-image'
// import img1 from '../images/carrelage1.jpg'
// import img2 from '../images/carrelage2.jpg'
// import img3 from '../images/carrelage3.jpg'
import img1 from '../images/carrelage11.jpg'
import img2 from '../images/carrelage21.jpg'
import img3 from '../images/carrelage31.jpg'
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
      url: `${img1}`,
      caption: ' 1'
    },
    {
      url:  `${img2}`,
      caption: '2'
    },
    {
      url: `${img3}`,
      caption: '3'
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