import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PostHeader from './PostHeader'
import PropTypes from 'prop-types'
import './PostContainer.css'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: props.post.likes
        }
    }
    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes })
    }
    render() {
        return (
            <div className="post-border">
                <PostHeader
                    username={this.props.post.username}
                    thumbnail={this.props.post.thumbnailUrl}
                />
                <div className="post-image-wrapper">
                    <img 
                        alt="post thumbnail" 
                        className="post-img" 
                        src={this.props.post.imageUrl}
                    />
                </div>
                <CommentSection
                    postId={this.props.post.imageUrl}
                    comments={this.props.post.comments} 
                />
            </div>
        )
    }
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
}

export default Post