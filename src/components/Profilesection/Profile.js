import React from 'react'
import './Profile.css'
// icon and image
import Profileimg from '../../images/profile__img.png'
import Icon from '../../images/Icon.svg'

const Profile = () => {
  return (
    <div className="profile_section">
      <div className="profile">
        <div id="profile_img">
          <img src={Profileimg} alt="profile" />
          <img src={Icon} alt="icon" className="icon" />
        </div>
        <h1>Edeh Johnpaul</h1>
        <h2 id='slack'>Slack</h2>
      </div>
    </div>
  );
}

export default Profile