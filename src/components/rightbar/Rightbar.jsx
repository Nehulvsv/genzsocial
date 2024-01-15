import React from 'react'
import './rightbar.css'
import Online from '../online/Online'
import { users } from '../../dummyData'

export default function Rightbar({profile}) {
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
          {users.map(use=>(<Online key={use.id} user = {use}/>))}
         
        </ul>
      </div>
    </div>
  )
}
