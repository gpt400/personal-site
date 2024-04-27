import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [velocity, setVelocity] = useState({ dx: 5, dy: 5 });
  const [primaryColor, setPrimaryColor] = useState("#fbd433");
  const [secondaryColor, setSecondaryColor] = useState("#141518");

  const SmileySVG = ({ primaryColor, secondaryColor, style }) => (
    <svg style={style} id="Layer_1" width="128" height="128" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
      <title>smiley</title>
      <path fill={primaryColor} d="M45.54,2.11A61.42,61.42,0,1,1,2.11,77.34,61.42,61.42,0,0,1,45.54,2.11Z"/>
      <path fill={secondaryColor} d="M45.78,32.27c4.3,0,7.79,5,7.79,11.27s-3.49,11.27-7.79,11.27S38,49.77,38,43.54s3.48-11.27,7.78-11.27Z"/>
      <path fill={secondaryColor} d="M77.1,32.27c4.3,0,7.78,5,7.78,11.27S81.4,54.81,77.1,54.81s-7.79-5-7.79-11.27S72.8,32.27,77.1,32.27Z"/>
      <path fill={secondaryColor} d="M28.8,70.82a39.65,39.65,0,0,0,8.83,8.41,42.72,42.72,0,0,0,25,7.53,40.44,40.44,0,0,0,24.12-8.12,35.75,35.75,0,0,0,7.49-7.87.22.22,0,0,1,.31,0L97,73.14a.21.21,0,0,1,0,.29A45.87,45.87,0,0,1,82.89,88.58,37.67,37.67,0,0,1,62.83,95a39,39,0,0,1-20.68-5.55A50.52,50.52,0,0,1,25.9,73.57a.23.23,0,0,1,0-.28l2.52-2.5a.22.22,0,0,1,.32,0l0,0Z"/>
    </svg>
  );

  function randColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      let newX = position.x + velocity.dx;
      let newY = position.y + velocity.dy;
      let newDx = velocity.dx;
      let newDy = velocity.dy;

      // Adjust the boundary checks for the width and height of the SVG
      if (newX <= 0 || newX >= window.innerWidth - 128) {
        newDx = -newDx;
        setPrimaryColor(randColor());
        setSecondaryColor(randColor());
      }
      if (newY <= 0 || newY >= window.innerHeight - 128) {
        newDy = -newDy;
        setPrimaryColor(randColor());
        setSecondaryColor(randColor());
      }

      setPosition({ x: newX, y: newY });
      setVelocity({ dx: newDx, dy: newDy });
    }, 50);

    return () => clearInterval(interval);
  }, [position, velocity]);

  return (
    <div className="App">
      <SmileySVG primaryColor={primaryColor} secondaryColor={secondaryColor} style={{
          position: 'absolute',
          top: position.y,
          left: position.x
        }} />
    </div>
  );
}

export default App;
