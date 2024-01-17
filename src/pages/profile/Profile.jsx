import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Profile() {
  return (
      <div>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
        <div className="profileRightTop"> 
            <div className="profileCover">
            <img className='profileCoverImg' src="/assets/post/3.jpeg" alt="" />
            <img className='userImg' src="/assets/person/3.jpeg" alt="" />
            </div>
        <div className="profileInfo">
             <h2 className="profileInfoName">nehul vasava</h2>
             <span className="profileInfoDesc">hello my friend</span>
            </div>    
        </div>

        <div className="profileRightBottom">

        <Feed/>
        <Rightbar profile/>
        </div>
        </div>
      </div>
    </div>
  )
}
