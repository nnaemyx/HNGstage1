import React from "react";
import "./Profile.css";
// icon and image
import Profileimg from "../../images/profile__img.png";
import { AiOutlineCamera } from "react-icons/ai";

const Profile = () => {
  return (
    <div className="profile_section">
      <div className="profile">
        <div id="profile_img">
          <img src={Profileimg} alt="profile" className="blur" />
          <AiOutlineCamera size={30} className="icon" />
        </div>
        <h1>Edeh Johnpaul</h1>
        <h2 id="slack">edehjohnpaul</h2>
      </div>
    </div>
  );
};

export default Profile;
