import {useState} from 'react';

import {Link} from 'react-router-dom';

import TitleAndDesc from '../components/TitleAndDesc';
import Project from '../components/Project';

import {projectsTitleDesc, projectsInfo, projectCategories, skillBgColor} from '../data';

const othersLinkContent = ['My LinkTree', 'HTML-CSS/SASS Projects', 'React Projects'];

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
                                const {live, imgUrl, name, desc, github, usedSkills} = project;
                                return <div key={live} className="project">
                                    <div className="project-img">
                                        <img src={imgUrl} alt='create-fact' />
                                    </div>
                                    <div className="project-info">
                                        <div className="name">{name}</div>
                                        <p className="desc">{desc}</p>
                                        <div className="live-gh">
                                            {
                                                [live, github].map((link, i) => <Link className={`link-${i + 1}`} to={link} target='_blank'>{i ? 'Project Code' : 'Live Project'}</Link>)
                                            }
                                            {
                                               usedSkills.map(skill => <span style={{backgroundColor: skill === 'Styled-Components' ? skillBgColor['StyledComponents'] : skillBgColor[skill]}} key={skill}>{skill}</span>)
                                            }
                                        </div>
                                    </div>
                                </div>
                            })
                        }  
                        <div className="others-link">
                            {
                                othersLinkContent.map(content => <Link key={content} to='#'>{content}</Link>)
                            }
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;