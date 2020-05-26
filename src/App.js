import React, { Component } from 'react';
import './App.css';
import { ReactBingmaps } from 'react-bingmaps';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ReactBingmaps
              bingmapKey = "And0ilinD8DoNgiE5v_Fj3uID5SdePJiMtNOx1MeSCCbYrwd8HYvlev4nW-qeWbO"
              center = {[13.0827, 80.2707]}
          />
      </div>
    );
  }
}

export default App;
