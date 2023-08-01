import {useState} from 'react';

import TitleAndDesc from '../components/TitleAndDesc';
import Project from '../components/Project';

import {projectsTitleDesc, projectsInfo, projectCategories} from '../data';

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
                    <select onChange={handleOnChange}>
                        <option defaultValue hidden value="">Choose Project Category</option>
                        {
                            projectCategories.map(({value, text}, index) => <option key={index} value={value}>{text}</option>)
                        }
                    </select>
                    <div className="project-list">
                        { 
                            projects.length ? 
                            projects.map((project, index) => <Project key={index} {...project} />) :
                            <h2 className="coming-soon">Coming Soon...</h2>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;