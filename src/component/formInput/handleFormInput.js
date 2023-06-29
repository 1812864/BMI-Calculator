
const handleFormInput = ({ onChange, placeholder, value,title}) => {
    return (
        <>
            <label>{title}</label>
            <input onChange={onChange} placeholder={placeholder} value={value} />
        </>
    )
}
export default handleFormInput