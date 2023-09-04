import {Link} from 'react-router-dom';

import Button from '../components/Button';

const Project = ({live, imgUrl, name, desc, github, usedSkills}) =>{
    return <div key={live} className="project">
        <div className="project-img">
            <img src={imgUrl} alt='create-fact' />
        </div>
        <div className="project-info">
            <p className="name">{name}</p>
            <p className="desc">{desc.split(' ').slice(0, 20).join(' ')}...</p>
            <div className="live-gh">
                {
                    [live, github].map((link, i) => <Link key={link} className={`link-${i + 1}`} to={link} target='_blank'>{i ? 'Project Code' : 'Live Project'}</Link>)
                }
                {
                    usedSkills.map(skill => (
                        <span key={skill}>{skill}</span>
                    ))
                }
            </div>
        </div>
    </div>
}

export default Project;