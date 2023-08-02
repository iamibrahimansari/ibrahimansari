import SocialLinks from '../components/SocialLinks';
import TitleAndDesc from '../components/TitleAndDesc';
import Button from '../components/Button';

import {introTitleDesc} from '../data';

const Intro = () =>{
    return(
        <div className="intro">
            <div className="intro-section common-section">
                <SocialLinks />
                <TitleAndDesc {...introTitleDesc} />
                <Button prop="PROJECTS" />
            </div>
        </div>
    )
}

export default Intro;