import React from 'react'
import fb from 'media/bxl-facebook.svg';
import tw from 'media/bxl-twitter.svg';
import ins from 'media/bxl-instagram.svg';


const Footer = () => {
    return (
    <footer id="footer">
        <div className="contenedor footer-content">
            <div className="contact-us">
                <h2 className="brand">TeamApp</h2>
                <p>Negocios íntegros y seguros</p>
            </div>
            <div className="social-media">
                <a href="./" className="social-media-icon">
                    <i className='bx bxl-facebook'></i><img src={fb} alt=""></img>
                </a>
                <a href="./" className="social-media-icon">
                    <i className='bx bxl-twitter'></i><img src={tw} alt=""></img>
                </a>
                <a href="./" className="social-media-icon">
                    <i className='bx bxl-instagram'></i><img src={ins} alt=""></img>
                </a>
            </div>
        </div>
        <div className="line"></div>
    </footer>

    )
}

export default Footer
