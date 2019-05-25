import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import {dummyData} from './dummy-data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData
    }
  }

  render() {
    return ( 
      <div className="App">
        <SearchBar />
        {this.state.data.map(post => (
          <PostContainer data={post} />
        ))}
      </div>
    )
  }
}

export default App;