import {educationTitleDesc, education} from '../data';

import TitleAndDesc from '../components/TitleAndDesc';
import IndividualEducation from '../components/IndividualEducation';

const Education = () =>{
    return <div className="education">
        <div className="common-section">
            <TitleAndDesc {...educationTitleDesc}  />
            <div className="education-section">
                <div className="edu-line"></div>
                {
                    [1, 2, 3].map(element => {
                        const temp = `edu-circle circle-${element}`;
                        return <div key={element} className={temp}></div>
                    })
                }
                {
                    education.map((edu, index) => <IndividualEducation key={index} index={index} {...edu} />)
                }
            </div>
        </div>
    </div>
}

export default Education;