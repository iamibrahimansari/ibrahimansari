import TitleAndDesc from '../components/TitleAndDesc';
import InputField from '../components/InputField';

import {contactTitleDesc} from '../data';


const Contact = () =>{
    const handleOnChange = event =>{
        const {name, value} = event.target;
        setFormInfo(prev => ({...prev, [name]: value}));
    }
    return(
        <div className="contact" id="contact">
            <div className="common-section">
                <TitleAndDesc {...contactTitleDesc} />
                <div className="contact-section">
                    <form action="https://formsubmit.co/fe4d0c6292724aab0b454b445d67175a" method="POST">
                        {
                            ['Name', 'Email', 'Message'].map(name => {
                                return <InputField 
                                    key={name} 
                                    name={name} 
                                />
                            })
                        }
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;