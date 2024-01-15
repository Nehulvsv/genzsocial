import './online.css'

export default function Online({user}) {
  return (
 
         <li className="rightbarFrd">
            <div className="rightbarProfileImgContainer">
              <img className = "rightbarProfileImg" src= {user.profilePicture} alt="" />
              <span className="righbarOnline"></span>
            </div> 
              <span className="rightbarUsername">{user.userName}</span>
          </li>   
  
  )
}
