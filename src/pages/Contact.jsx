import TitleAndDesc from '../components/TitleAndDesc';
import InputField from '../components/InputField';

import {contactTitleDesc} from '../data';

const initialState = {
    Name: '',
    Email: '',
    Message: ''
}

const Contact = () =>{
    const [formInfo, setFormInfo] = useState(initialState);
    const handleForm = event =>{
        event.preventDefault();
        const {name, value} = event.target;
        setFormInfo(prev => ({...prev, [name]: value}));
    }
    return(
        <div className="contact" id="contact">
            <div className="common-section">
                <TitleAndDesc {...contactTitleDesc} />
                <div className="contact-section">
                    <form action="https://formsubmit.co/fe4d0c6292724aab0b454b445d67175a" method="POST" onSubmit={handleForm}>
                        {
                            ['Name', 'Email', 'Message'].map(name => <InputField key={name} name={name} formInfo={formInfo} />)
                        }
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;