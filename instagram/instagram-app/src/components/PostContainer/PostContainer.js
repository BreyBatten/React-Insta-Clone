import React from 'react';
// import CommentSection from '../CommentSection/CommentSection';
// import {dummyData} from '../../dummy-data';
// import PostHeader from './PostHeader'
import Post from './Post'
import './PostContainer.css'

function PostContainer(props) {
    return (
        <div className="post-container">
            {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}    
            {/* <CommentSection /> */}
        </div>
    )
}

export default PostContainer;