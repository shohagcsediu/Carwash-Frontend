import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        { name: "How To take care of a car", link: "/" },
        { name: "Car Check Up Tips", link: "/" },
        { name: "Car Driving Techniq", link: "/" },
    ]
    const ourAddress = [
        { name: "Uttara Dhaka", link: "//google.com/map" },

    ]
    const pages = [
        { name: "About Us", link: "/" },
        { name: "Contact Us", link: "/" },
        { name: "Sitemap", link: "/" }
    ]
    const services = [
        { name: "Oil Change", link: "/" },
        { name: "Repair", link: "/" },
        { name: "Car Wash", link: "/" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Recent Blog"} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Pages" menuItems={pages} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                     <h6>Call now</h6>
                    <button className="btn btn-primary">+01912345678</button>
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;