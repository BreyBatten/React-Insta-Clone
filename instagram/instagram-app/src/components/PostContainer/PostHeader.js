import React from 'react'

const PostHeader = props => {
    return (
        <div className="post-header">
            <div className="post-thumb-wrapper">
                <img alt="post header" className="post-thumbnail" src={props.thumbnailUrl} />
            </div>
            <div className="post-thumb-user"><strong>{props.username}</strong></div> 
        </div>
    )
}

export default PostHeader;