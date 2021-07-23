

const Input = ({ type,name,placeholder,input,onChange }) => {
    return (
        <input type={type} name={name} id={name} placeholder={placeholder} value={input} onChange={onChange}/>
    )
}

export default Input
