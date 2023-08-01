import {FaLinkedin, FaGithub, FaTwitter, FaFacebookF} from 'react-icons/fa';

import {Link} from 'react-router-dom';

import {socialLinks} from '../data';

const SocialLinks = () =>{
    return(
        <div className="social-links">
            {
                socialLinks.map((link, index) => {
                    return <Link 
                        key={index}
                        to={link} 
                        target='_blank'>
                            {
                                index === 0 ? 
                                <FaLinkedin /> : 
                                index === 1 ? 
                                <FaGithub /> : 
                                index === 2 ? 
                                <FaTwitter /> : 
                                <FaFacebookF />
                            }
                    </Link>
                })
            }
        </div>
    )
}

export default SocialLinks;