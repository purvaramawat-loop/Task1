import React from 'react'
import { useState } from 'react';

const Image_slider = () => {
  // const [toggle, setToggle] = useState(true);

  return (
    <div id='slide-container'>
        <div className='img-slide'>
            <img id='img1' src="https://media.designcafe.com/wp-content/uploads/2021/09/29222339/classical-dining-room-interior-design-with-wooden-table-with-chairs.jpg" alt="" />
            <div className='fix'>
                <h2>Interior Design by Top Experts</h2>
                <button className='book-btn'>BOOK  OUR  APPOINTMENT</button>
            </div>
        </div>
    </div>
  )
}

export default Image_slider
