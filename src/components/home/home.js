import React from 'react';
import image from "../../images/image.png"
import { NavLink } from 'react-router-dom';
import "./home.css";
import icon from "../../images/icon.png"

function Home() {
    return (
        <div className='homepage'>
            <div className='container'>
                <div className='image'>
                    <img src={image} alt="image" />

                    <div className=' smallScreen'>
                        <NavLink to="/create" className="nav-btn">
                            <img src={icon} alt="" /></NavLink>
                    </div>
                </div>

                <div className='content'>
                    <div className='title'>Imagine If <br />
                        <span>Snapchat</span><br />
                        had events
                    </div>

                    <div className='text'>
                        <div className="text1">Easily host and share events with your friends across any social media.</div> </div>



                    <div className='button'>
                        <NavLink to="/create" className="nav-btn">
                            <img src={icon} alt="" /></NavLink>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Home