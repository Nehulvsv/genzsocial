import React from 'react'
import './post.css'
import {MoreVert} from "@mui/icons-material"
import {users} from "../../dummyData"

export default function Post({post}) {
   
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" className='postProfileImg'/>
                    <span className='postUserName'>{users.filter(u=>u.id === post.userId)[0].userName}</span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} className='postImg' alt="j" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.png" alt=""  className='likeIcon'/>
                    <img src="/assets/heart.png" alt="" className='likeIcon'/>
                    <span className="likecounter">{post.like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} Comment</span>
                </div>
            </div>
        </div>

    </div>
  )
}