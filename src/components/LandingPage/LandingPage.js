import React from 'react'
import { Link } from 'react-router-dom'
import LivingRoom1 from '../../images/LandingPage-Images/livingroom2.jpeg'
import Dining2 from '../../images/LandingPage-Images/dining2.jpeg'
import Office from '../../images/LandingPage-Images/office2.jpeg'
import './LandingPage.css'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';



const LandingPage = () => {

  return (
    <div className="landing-page">
      <div className="links-homepage">
        <Link to='/login'>Log In</Link> &nbsp; &nbsp;
        <Link to='/signup'>Sign Up</Link>
      </div>
      
      
      <div className="images-container">

      <CarouselProvider
        naturalSlideWidth={140}
        naturalSlideHeight={125}
        totalSlides={4}
      >
        <Slider>
          <Slide index={0}>
            <div className="mySlides fade">
              <img src={Dining2} alt="dining room" width="1000px" />
            </div>
          </Slide>

          <Slide index={1}>
            <div className="mySlides fade">
              <img src={Office} alt="office" width="1000px"/>
            </div>
          </Slide>

          <Slide index={2}>
            <div className="mySlides fade">
              <img src="https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0145/abstract-ink-brush-framed-wall-art-black-white-z.jpg" width="1000px" alt="home" />
            </div>
            </Slide>
            
          <Slide index={3}>
            <div className="mySlides fade">
              <img src={LivingRoom1} alt="Living Room" width="1000px"/>
            </div>
          </Slide>
          </Slider>
            <ButtonBack className="button-back">&#10094;</ButtonBack>
           <ButtonNext className="button-next">&#10095;</ButtonNext>
      </CarouselProvider>
      </div>



    </div>
  )
}

export default LandingPage
