import {HashLink} from 'react-router-hash-link';
import {menus} from '../data';

const NavbarForSmallScreen = ({state, stateMethod, setHiddenClass}) =>{
    const handleOnClick = () =>{
        stateMethod('');
        setHiddenClass('');
    }
    return <nav className={`nav small-screen ${state}`}>
        <span onClick={handleOnClick}>&times;</span>
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
                return <HashLink onClick={handleOnClick} smooth key={index} to={path} className="nav__link">{menu}</HashLink>
            })
        }
    </nav>
}

export default NavbarForSmallScreen;