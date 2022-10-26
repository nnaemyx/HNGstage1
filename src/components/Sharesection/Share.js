import React from 'react'
// react icons
import { RiShareForwardLine } from 'react-icons/ri'
import {TbDotsCircleHorizontal} from 'react-icons/tb'
import './Share.css'

const Share = () => {
  return (
    <div>
      <div className="share_section">
        <div className="share_icon">
          <RiShareForwardLine />
          <span className="tooltiptext">Share Link</span>
        </div>
        <TbDotsCircleHorizontal className='icon_mobile'/>
      </div>
    </div>
  );
}

export default Share