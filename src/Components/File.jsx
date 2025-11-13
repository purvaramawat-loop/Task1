import React, { useState } from 'react'
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import Image_slider from "./Image_slider.jsx";
import Upgrade from './Upgrade.jsx';
import Explore from './Explore.jsx';
import Review from './Review.jsx';
import End from './End.jsx';
// import Layers from './Layers.jsx';

const File = () => {
  // const [toggle, setToggle] = useState(true);

  return (
    <div id='Outer_body'>

        <Nav />
        <Home />
        <Image_slider />
        <Upgrade />
        <Explore />
        <Review />
        <End />
        {/* <Layers /> */}
        
    </div>
  )
}

export default File