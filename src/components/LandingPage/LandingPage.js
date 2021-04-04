import React from 'react'
import LivingRoom1 from '../../images/LandingPage-Images/livingroom2.jpeg'
import Dining2 from '../../images/LandingPage-Images/dining2.jpeg'
import Office from '../../images/LandingPage-Images/office2.jpeg'

const LandingPage = () => {
  return (
    <div>
      Landing Page
       <img src={Dining2} />
      <img src={Office} />
      <img src="https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0145/abstract-ink-brush-framed-wall-art-black-white-z.jpg" width="600px"/>
       <img src={LivingRoom1} width="40%"/>
    </div>
  )
}

export default LandingPage
