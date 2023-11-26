import React from 'react';
import './App.scss';
import showreel from './content/showreel.mp4';

function App() {
  return (
    <div className="App">
      <div className="Opening">

        <video className='BGVideo' src={showreel} muted autoPlay loop/>

        <div className="titleText">

          <p className="topText">Oscar</p>
          <p className="bottomText">Ratcliffe</p>
          
        </div>

      </div>
      
      <div className="lowercontent">

            <div className="Showreel">
                <h1>Showreel</h1>
                  <video className='ShowreelVideo' src={showreel} controls/>
            </div>

            <div className="Seperator" />

            <div className="AboutMe">
                <h1>About Me</h1>
                  
            </div>
      </div>

    </div>
  );
}

export default App;
