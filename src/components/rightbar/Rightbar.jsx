import React from 'react'
import './rightbar.css'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="bdayContainer">
          <img src="/assets/gift.png" alt="gift" className='bdayImg'/>
          <span className="bdayText"><b>dev</b> and <b>3 other friends</b> have a birthday today!</span>
        </div>
        <img className='rightbarAd' src="/assets/ad.png" alt="ad" />
        <h4 className="rightbarTitle">Online Friend</h4>
        <ul className="rightbarFrdList">
          <li className="rightbarFrd">
            <div className="rightbarProfileImgContainer">
              <img className = "rightbarProfileImg" src="/assets/person/3.jpeg" alt="" />
              <span className="righbarOnline"></span>
            </div>
              <span className="rightbarUsername">Rahul</span>
          </li>   
        </ul>
      </div>
    </div>
  )
}
