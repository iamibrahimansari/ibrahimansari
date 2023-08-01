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
                <h2 style={{textAlign: 'center', marginTop: '3rem', fontSize: '3rem', color: 'red'}}>
                    Site is in working mode. Available now for big screen such as Laptop, Desktop and T.V. It will be available soon for all devices.
                </h2>
            </div>
        </div>
    )
}

export default Intro;