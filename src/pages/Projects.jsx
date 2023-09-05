import {useState} from 'react';

import {Link} from 'react-router-dom';

import TitleAndDesc from '../components/TitleAndDesc';
import Project from '../components/Project';

import {projectsTitleDesc, projectsInfo} from '../data';

const othersLinkContent = ['LinkTree', 'HTML-CSS', 'HTML-CSS-JS', 'React'];

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
                                othersLinkContent.map(content => {
                                    let path = null;
                                    const temp = content.toLowerCase();
                                    switch(temp){
                                        case 'linktree':
                                            path = '/linktree';
                                            break;
                                        default:
                                            path = `/${temp}-projects`;
                                    }
                                    return <Link key={content} to={'https://ibrahimansari.vercel.app' + path} target="_blank">
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