import {useNavigate} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

import {Link} from 'react-router-dom';

import {menus} from '../data';

const Header = () =>{
    const navigate = useNavigate();
    return <header>
        <div className="logo" onClick={() => navigate('/')}>
            <div className="img-container">
                <img src="/ibms.jpg" alt="ibrahim ansari" width="887" height="887" />
            </div>
            <p className="my-name">IBRAHIM ANSARI</p>
        </div>
        <nav className="nav">
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
    </header> 
}

export default Header;