import {useState} from 'react';

import TitleAndDesc from '../components/TitleAndDesc';
import InputField from '../components/InputField';

import {contactTitleDesc} from '../data';

const initialState = {
    name: '',
    email: '',
    message: ''
}

const Contact = () =>{
    const [formInfo, setFormInfo] = useState(initialState);
    const handleForm = event =>{
        const {name, email, message} = {...formInfo};
        if(name && email && message){
            setFormInfo(initialState);
        }else{
            alert('Fill all the field before send');
        }
    }

    const handleOnChange = event =>{
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
                            ['Name', 'Email', 'Message'].map(name => {
                                return <InputField 
                                    key={name} 
                                    onChange={handleOnChange}
                                    formInfo={formInfo} 
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