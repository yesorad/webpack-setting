import React from 'react';
import reactImg from './assets/images/react.jpg';
import reactSvg from './assets/images/react.svg';

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <>
      <div className="helloWebpack">Hello Webpack</div>
      <img src={reactSvg} alt="reactImg" className="reactImg" />
      <img src={reactImg} alt="reactImg" className="reactImg" />
    </>
  );
}

export default App;
