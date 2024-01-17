import React from 'react'
import './rightbar.css'
import Online from '../online/Online'
import { users } from '../../dummyData'

export default function Rightbar({profile}) {

const HomeRightbar = () =>{
  return(<>
   <div className="bdayContainer">
          <img src="/assets/gift.png" alt="gift" className='bdayImg'/>
          <span className="bdayText"><b>dev</b> and <b>3 other friends</b> have a birthday today!</span>
        </div>
        <img className='rightbarAd' src="/assets/ad.png" alt="ad" />
        <h4 className="rightbarTitle">Online Friend</h4>
        <ul className="rightbarFrdList">
          {users.map(use=>(<Online key={use.id} user = {use}/>))}
         
        </ul>
  </>)

}
  const ProfileRightbar = () => {
  return (
       <>
       <h4 className="rightbarTitle">User Information</h4>
       <div className="rightbarInfo">
       <div className="rightbarInfoItem">
        <span className="rightbarInfokey">City:</span>
        <span className="rightbarInfoValue">Surat</span>
       </div>
       </div>
       <div className="rightbarInfo">
       <div className="rightbarInfoItem">
        <span className="rightbarInfokey">Relationship:</span>
        <span className="rightbarInfoValue">Single</span>
       </div>
       </div>
       <h4 className="rightbarTitle">User Friends</h4>
       <div className="rightbarFollowings">
        <div className="rightbarFollwing">
          <img  className='rightbarFollowingImg' src="assets/person/1.jpg" alt="" />
          <span className="rightbarFollingName">Nehul vasava</span>
        </div>
        <div className="rightbarFollwing">
          <img  className='rightbarFollowingImg' src="assets/person/1.jpg" alt="" />
          <span className="rightbarFollingName">Nehul vasava</span>
        </div>
        <div className="rightbarFollwing">
          <img  className='rightbarFollowingImg' src="assets/person/1.jpg" alt="" />
          <span className="rightbarFollingName">Nehul vasava</span>
        </div>
        <div className="rightbarFollwing">
          <img  className='rightbarFollowingImg' src="assets/person/1.jpg" alt="" />
          <span className="rightbarFollingName">Nehul vasava</span>
        </div>
        <div className="rightbarFollwing">
          <img  className='rightbarFollowingImg' src="assets/person/1.jpg" alt="" />
          <span className="rightbarFollingName">Nehul vasava</span>
        </div>
       </div>
       </> 
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
