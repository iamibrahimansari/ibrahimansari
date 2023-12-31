import {useState} from 'react';

import {Link} from 'react-router-dom';

import TitleAndDesc from '../components/TitleAndDesc';
import Project from '../components/Project';

import {projectsTitleDesc, projectsInfo, othersLinkContent} from '../data';

const Projects = () =>{
    const [projects, setProjects] = useState(projectsInfo);
    return(
        <div className="projects" id="projects">
            <div className="common-section">
                <TitleAndDesc {...projectsTitleDesc} />
                <div className="project-section">
                    <div className="project-list">
                        {
                            projects.map((project, i) => <Project key={`${project.live}-${i + 1}`} {...project} />)
                        }  
                        <div className="others-link">
                            {
                                othersLinkContent.map(({id, content, url}) => {
                                    return <Link key={id} to={url} target="_blank">
                                        {content}
                                    </Link>
                                })
                            }
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;