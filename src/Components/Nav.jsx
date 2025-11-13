import React from 'react'
import { useState } from 'react';

const Nav = () => {
  // const [toggle, setToggle] = useState(true);

  return (
    <div id="main_bar">

        <div id="left_side">
            <img id='logo' src="https://www.designcafe.com/wp-content/uploads/2023/07/designcafe-logo.webp" alt="" />
        </div>

        <div id="mid_side">
            <h5>Design Gallery<i className="ri-arrow-down-s-fill"></i></h5>
            <h5>Recent Projects</h5>
            <h5>Reviews</h5>
            <h5>Site Services</h5>
            <h5>DC Signature</h5>
            <h5>Guides<i className="ri-arrow-down-s-fill"></i></h5>
            <h5>Blogs<i className="ri-arrow-down-s-fill"></i></h5>
            <h5>Cities<i className="ri-arrow-down-s-fill"></i></h5>
            <h5>More<i className="ri-arrow-down-s-fill"></i></h5>
        </div>

        <div id="right_side">
            <button id='btn'><i className="ri-contacts-line"></i> Contact Us</button>
        </div>


    </div>
  )
}

export default Nav