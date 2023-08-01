const InputField = ({name, formInfo}) =>{
    return <label>
        <span>{name}</span>
        {
            name === 'Name' || name === 'Email' ?
            <input 
                type={name === 'Name' ? 'text' : 'email'} 
                value={name === 'Name' ? formInfo.name : formInfo.email} 
                name={name.toLowerCase()} 
                placeholder={`Enter Your ${name}`} 
            /> : 
            <textarea placeholder={`Enter Your ${name}`} value={formInfo.message} name={name.toLowerCase()}></textarea>
        }
    </label>
}

export default InputField;