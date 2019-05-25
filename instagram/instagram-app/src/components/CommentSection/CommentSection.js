import React from 'react';
import {dummyData} from '../../dummy-data';
// import Comment from './Comment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dummyData
        };
    }

    render() {
        return (
            <div className="comment-section">
                {}
            </div>
        )
    }
}

export default CommentSection;