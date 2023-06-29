
const handleButton = ({label,onClick,className}) => {
    return(
        <button onClick={onClick} className={className}>{label}</button>
    )
}
export default handleButton