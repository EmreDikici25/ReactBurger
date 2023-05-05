import React from "react";
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <p> &copy; 2023 NZDBurger.com</p>
                <div className="icons">
                <FaInstagram/>             
                <FaTwitter/> 
                <FaFacebook/>
                </div>
            </div>
        </div>
    )
}

export default Footer;