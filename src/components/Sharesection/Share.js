import React from 'react'
import './Share.css'
// react icon
import { RiShareForwardLine } from 'react-icons/ri'
// import images
import Iconmobile from '../../images/_Avatar share button.png'

const Share = () => {
  return (
    <div>
      <div className="share_section">
        <div className="share_icon">
          <RiShareForwardLine />
          <span className="tooltiptext">Share Link</span>
        </div>
        <div className="icon_mobile">
          <img src={Iconmobile} alt="ima" />
          <span className="tooltiptext">Share Link</span>
        </div>
      </div>
    </div>
  );
}

export default Share