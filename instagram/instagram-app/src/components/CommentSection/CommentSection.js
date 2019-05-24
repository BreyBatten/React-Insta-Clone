import React from 'react';
import dummyData from '../../dummy-data';

class CommentSection extends React.Component {
    constructor() {
        super();
        this.state = {
            CommentSection: dummyData
        };
    }

    render() {
        return (
            <div className="comment-section">
                comments go here
            </div>
        )
    }
}

export default CommentSection;