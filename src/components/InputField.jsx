const InputField = ({name}) =>{
    return <label>
        <span>{name}</span>
        {
            name === 'Name' || name === 'Email' ?
            <input type={name === 'Name' ? 'text' : 'email'} name={name.toLowerCase()} placeholder={`Enter Your ${name}`} /> : 
            <textarea placeholder={`Enter Your ${name}`} name={name.toLowerCase()}></textarea>
        }
    </label>
}

export default InputField;