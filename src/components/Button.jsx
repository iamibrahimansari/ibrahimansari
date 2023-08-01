import {HashLink} from 'react-router-hash-link';
const Button = ({prop}) =>{
    return (
        <div className="btn">
            <button type="button">
                {
                    prop === 'PROJECTS' || prop === 'CONTACT' ?
                    <HashLink smooth to={`/#${prop.toLowerCase()}`}>{prop}</HashLink> :
                    {prop}
                }
            </button>
        </div>
    )
}

export default Button;