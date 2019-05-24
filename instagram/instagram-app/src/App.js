import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import CommentSection from './components/CommentSection/CommentSection';

class App extends Component {
  constructor() {
    super();
    this.setState = {
      dummyData: []
    }
  }

  render() {
    return ( 
      <div className="App">
        <SearchBar />
        <PostContainer />
        <CommentSection />
      </div>
    )
  }
}

export default App;
