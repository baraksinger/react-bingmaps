import React, { Component } from 'react';
import './App.css';
import { ReactBingmaps } from 'react-bingmaps';

class App extends Component{
    state = {
        pushPins: []
    }

    AddPushPinOnClick = (location) => {
        let pushPin = [location.latitude, location.longitude];
        let pushPinsCopy = JSON.parse(JSON.stringify(this.state.pushPins));
        this.setState( {pushPins: [...pushPinsCopy, pushPin]})
    }

    render() {
        let pushPins = this.state.pushPins.map((pushPin) => {
            return (
                {
                    "location": pushPin,
                    "option": {color: 'red'},
                }
            )
        });

        return (
            <div className="App">
                <ReactBingmaps
                    bingmapKey="And0ilinD8DoNgiE5v_Fj3uID5SdePJiMtNOx1MeSCCbYrwd8HYvlev4nW-qeWbO"
                    center={[13.0827, 80.2707]}
                    getLocation={
                        {addHandler: "click", callback: this.AddPushPinOnClick}
                    }
                    pushPins = {pushPins}
                />
            </div>
        );
    }
}

export default App;
