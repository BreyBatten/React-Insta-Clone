import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import dummyData from '../../dummy-data';

class PostContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            PostContainer: dummyData
        };
    }

    render() {
        return (
            <div className="post-container">
                <p>Posts go here</p>
                <CommentSection />
            </div>
        )
    }
}

export default PostContainer;