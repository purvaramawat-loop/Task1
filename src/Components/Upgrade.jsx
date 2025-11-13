import React, { useState } from 'react'

const Upgrade = () => {
  // const [toggle, setToggle] = useState(true);

  return (
    <div id='upgrade-with'>
        
        <div id="upper-part">
            <h1 id='h1-black'>Build Your Home With The Finest Interior Designers</h1>
            <h3 id='h3-grey'>Upgrade your lifestyle with us.</h3>
        </div>

        <div id="bottom-part">
            <div id="icon1">
                <i id='ic' className="ri-home-3-line"></i>
                <h4>Upgrade yout life with 45% OFF</h4>
            </div>
            <div id="icon2">
                <i id='ic' className="ri-lightbulb-ai-line"></i>
                <h4>Multiple top designers idea</h4>
            </div>
            <div id="icon3">
                <i id='ic' className="ri-phone-line"></i>
                <h4>One-on one consultation</h4>
            </div>
            <div id="icon4">
                <i id='ic' className="ri-ai-generate-3d-line"></i>
                <h4>3D model of your space</h4>
            </div>
            <div id="icon5">
                <i id='ic' className="ri-building-2-line"></i>
                <h4>Color paletter & floor plan</h4>
            </div>
        </div>

    </div>
  )
}

export default Upgrade