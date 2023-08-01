import TitleAndDesc from '../components/TitleAndDesc';
import Button from '../components/Button';

import {aboutTitleDesc, skills, aboutMe} from '../data';

const About = () =>{
    return(
        <div className="about" id="about">
            <div className="common-section">
                <TitleAndDesc {...aboutTitleDesc} />
                <div className="about__skill">
                    <div className="about__section">
                        <h3>Get to know me!</h3>
                        <div className="about__desc">
                            {
                                aboutMe.map((desc, index) => <p key={index}>{desc}</p>)
                            }
                        </div>
                        <Button prop="CONTACT" />
                    </div>
                    <div className="skill__section">
                        <h3>My Skills - Tools and Technologies</h3>
                        <div className="skillset">
                            {
                                skills.map(skill => <span key={skill}>{skill}</span>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;