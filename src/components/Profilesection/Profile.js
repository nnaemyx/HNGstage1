import React from 'react'
import './Profile.css'
import Profileimg from '../../images/profile__img.png'

const Profile = () => {
  return (
    <div className='profile_section'>
      <div className='profile'>
        <img src={Profileimg} alt="profile" id='profile_img' />
        <h1>Edeh Johnpaul</h1>
      </div>
    </div>
  )
}

export default Profile