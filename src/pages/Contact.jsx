import TitleAndDesc from '../components/TitleAndDesc';
import InputField from '../components/InputField';

import {contactTitleDesc} from '../data';

const Contact = () =>{
    return(
        <div className="contact" id="contact">
            <div className="common-section">
                <TitleAndDesc {...contactTitleDesc} />
                <div className="contact-section">
                    <form action="https://formsubmit.co/iamibrahimansari@gmail.com" method="POST">
                        {
                            ['Name', 'Email', 'Message'].map(name => <InputField key={name} name={name} />)
                        }
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;