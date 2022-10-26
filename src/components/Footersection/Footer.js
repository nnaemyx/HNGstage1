import React from 'react'

import './Footer.css'
// import logos
import Zuriimg from '../../images/Vector (22).png'
import Ingressiveimg from '../../images/I4G.png'

const Footer = () => {
  return (
    <div className='footer_section'>
      <div className='footer'>
        <div>
          <img src={Zuriimg} alt="" />
        </div>

        <div>
          <p>HNG Internship 9 Frontend Task</p>
        </div>

        <div>
          <img src={Ingressiveimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer