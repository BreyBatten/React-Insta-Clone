import React from 'react';
// import CommentSection from '../CommentSection/CommentSection';
// import {dummyData} from '../../dummy-data';
// import PostHeader from './PostHeader'

function PostContainer(props) {
    console.log(props)
    return (
        <div className="post-container">
            <div>
                <div className="post-header">
                    <p>{props.data.thumbnailUrl}</p>
                    <p>{props.data.username}</p>
                </div>
                <div className="post-img">
                    <p>{props.data.imageUrl}</p>
                </div>
                <div className="post-info">
                    <p>{props.data.likes}</p>
                    <p>{props.data.timestamp}</p>
                </div>
                <br />
                {/* <CommentSection /> */}
            </div>
        </div>
    )
}

export default PostContainer;