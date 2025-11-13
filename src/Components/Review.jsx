import React, { useState } from 'react'
import './Other.css'

const Review = () => {

    return (
        <div id="main">

            <div id="header">
                <h2 className='heading'>Clients Review On Our Beautiful Designs.</h2>

                <h3 className='statement'>Our customers love our professional interior services and here is why. <span>OUR MORE REVIEWS</span></h3>
            </div>

            <div className="review">
                <img className='review-img' src="https://cdn.decorilla.com/imgp/jpg/ac553f93-1ec5-40d0-9142-fc39457481b2/Decorilla-Online-Interior-Design-Help.jpg?width=1600" alt="" />

                <div id="review-div">
                    <div id="review1">
                        <h5 id='rev'>We hired DC for our home interiors. The sales team led by Kajol Mishra, designer Nikita and project manager Prabhu was very responsive. They met our requests with value-for money results and promised quality finishes.</h5>
                        <h4 id='name'>Manish Chandgothia</h4>
                        <h5 id='location'>3 BHK, Bren Imperia, Bengaluru</h5>
                    </div>

                    <div id="review2">
                        <h5 id='rev'>DesignCafe personalized my home interiors exactly the way I wanted! Every detail matched my vision perfectly. With 20% extra storage space, I'm confident in a quality and durability. A truly hassle-free experience!</h5>
                        <h4 id='name'>Tejasswi Prakash</h4>
                        <h5 id='location'>3 BHK, Goregaon, Mumbai</h5>
                    </div>

                    <div id="review3">
                        <h5 id='rev'>Our experience with DesignCafe was fantastic! They got what we wanted, giving our home the perfect look. Their Anna Salai Experience Center has amazing modular designs, 20% more space, and a 10-year warranty.</h5>
                        <h4 id='name'>Shanthanu & Keerthi</h4>
                        <h5 id='location'>3 BHK, Nungambakkam, Chennai</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Review

