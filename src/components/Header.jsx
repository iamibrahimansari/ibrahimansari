import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

import {RxHamburgerMenu, RxCross2} from 'react-icons/rx';

import {Link} from 'react-router-dom';

import {menus} from '../data';

const Header = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return <header>
        <div className="logo" onClick={() => navigate('/')}>
            <div className="img-container">
                <img src="/ibms.jpg" alt="ibrahim ansari" width="887" height="887" />
            </div>
            <p className="my-name">IBRAHIM ANSARI</p>
        </div>
        <nav className="nav" style={{display: isOpen ? 'none' : 'flex'}}>
            {
                menus.map((menu, index) => {
                    let path = null;
                    switch(index){
                        case 0:
                            path = '/';
                            break;
                        case 1:
                            path = '/#about';
                            break;
                        case 2:
                            path = '/#projects';
                            break;
                        default:
                            path = '/#contact';
                    }
                    return <HashLink smooth key={index} to={path} className="nav__link">{menu}</HashLink>
                })
            }
        </nav>
        <span className="open-menu" onClick={() => setIsOpen(!isOpen)}><RxHamburgerMenu /></span>
        <span className="close-menu"><RxCross2 /></span>
    </header>
    
}

export default Header;