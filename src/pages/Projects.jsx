import {useState} from 'react';

import {Link} from 'react-router-dom';

import TitleAndDesc from '../components/TitleAndDesc';
import Project from '../components/Project';

import {projectsTitleDesc, projectsInfo, projectCategories, skillBgColor} from '../data';

const Projects = () =>{
    const [projects, setProjects] = useState(projectsInfo);
    const handleOnChange = event =>{
        const category = event.target.value;
        if(category === 'all'){
            setProjects(projectsInfo);
        }else{
            setProjects(projectsInfo.filter(project => project.categories.includes(category)));
        }
    }
    return(
        <div className="projects" id="projects">
            <div className="common-section">
                <TitleAndDesc {...projectsTitleDesc} />
                <div className="project-section">
                    <div className="project-list">
                        {
                            projects.map(project => {
                                return <div className="project">
                                    <div className="project-img">
                                        <img src={project.imgUrl} alt='create-fact' />
                                    </div>
                                    <div className="project-info">
                                        <div className="name">{project.name}</div>
                                        <p className="desc">{project.desc}</p>
                                        <div className="live-gh">
                                            <Link to={project.live} target='_blank'>Live Project</Link>
                                            <Link to={project.github} target='_blank'>Project Code</Link>
                                        </div>
                                        <div className="skills">
                                            {
                                                project.usedSkills.map(skill => <span style={{backgroundColor: skill === 'Styled-Components' ? skillBgColor['StyledComponents'] : skillBgColor[skill]}} key={skill}>{skill}</span>)
                                            }
                                        </div>
                                    </div>
                                </div>
                            })
                        }    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;