const InputField = ({onChange, formInfo, name}) =>{
    return <label>
        <span>{name}</span>
        {
            name === 'Name' || name === 'Email' ?
            <input 
                type={name === 'Name' ? 'text' : 'email'} 
                onChange={onChange}
                value={name === 'Name' ? formInfo.name : formInfo.email} 
                name={name.toLowerCase()} 
                placeholder={`Enter Your ${name}`} 
            /> : 
            <textarea placeholder={`Enter Your ${name}`} onChange={onChange} value={formInfo.message} name={name.toLowerCase()}></textarea>
        }
    </label>
}

export default InputField;