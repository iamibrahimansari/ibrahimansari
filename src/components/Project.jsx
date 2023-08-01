import {Link} from 'react-router-dom';

import Button from '../components/Button';

import {skillBgColor} from '../data';

const Project = ({categories, name, imgUrl, github, live, usedSkills}) =>{
    const level = categories[0][0].toUpperCase() + categories[0].slice(1);
    return(
        <div className="project">
            <div className="level">{level}</div>
            <div className="backface">
                <Link className="ghlive" to={github} target="_blank">Github</Link>
                <Link className="ghlive" to={live} target="_blank">Live</Link>
            </div>
            <div className="project-img">
                <img src={imgUrl} alt={name} />
            </div>
            <p className="project-name">{name}</p>
            <div className="project-skills">
                {
                    usedSkills.map((skill, index) => {
                        return <span  
                            style={{
                                backgroundColor: skill === 'Styled-Components' ? 
                                skillBgColor.StyledComponents : 
                                skillBgColor[skill]
                            }} 
                            key={index} 
                            className="skill">
                                {skill}
                        </span>}
                    )
                }
            </div>
        </div>
    )
}

export default Project;