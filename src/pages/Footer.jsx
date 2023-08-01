import {Link} from 'react-router-dom';

import SocialLinks from '../components/SocialLinks';

const Footer = () =>{
    return <footer>
        <section className="upper">
            <div className="left">
                <h2>IBRAHIM ANSARI</h2>
                <p>
                    I'm Junior Mern Stack Web Developer who focus on the problem solving technique so that all the web application developed by me can perform well in almost all the situations.
                </p>
            </div>
            <div className="right">
                <h2>SOCIAL</h2>
                <SocialLinks />
            </div>
        </section>
        <section className="lower">
            <span>
                &copy; Copyright {new Date().getFullYear()}
            </span>
            <div>
                Inspired by <Link to="https://www.rammaheshwari.com/" target="_blank">
                    Ram Maheshwari
                </Link>
            </div>
            <span>Made by Ibrahim Ansari</span> 
        </section>
    </footer>
}

export default Footer;