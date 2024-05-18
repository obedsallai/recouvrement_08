const Button=({label, classname, Type})=>{
    return(
        <button className={classname} type={Type}>
            {label}        
        </button>
    )
};
export default Button;