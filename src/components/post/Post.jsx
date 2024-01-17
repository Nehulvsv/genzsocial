import React, { useState } from 'react'
import './post.css'
import {MoreVert} from "@mui/icons-material"
import {users} from "../../dummyData"

export default function Post({post}) {
    const [like , setLike] = useState(post.like);
    const [isLiked , setIsLiked] = useState(false);

    function likeHender(){
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

   
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
                    <img src="/assets/like.png" alt=""  className='likeIcon' onClick={likeHender}/>
                    <img src="/assets/heart.png" alt="" className='likeIcon' onClick={likeHender}/>
                    <span className="likecounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} Comment</span>
                </div>
            </div>
        </div>

    </div>
  )
}
