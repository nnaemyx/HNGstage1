import React from 'react'
import {RiShareForwardLine} from 'react-icons/ri'
import './Share.css'

const Share = () => {
  return (
    <div>
      <div className="share_section">
        <div className="share_icon">
          <RiShareForwardLine />
          <span className="tooltiptext">Share Link</span>
        </div>
      </div>
    </div>
  );
}

export default Share