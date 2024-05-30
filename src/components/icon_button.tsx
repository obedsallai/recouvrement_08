import React from "react"
import { Children } from "react"
interface ButtonProps {
    label: string;
    classname: string;
}
const IconButton =(label,classname ,children:React.ReactNode)=>{
    return (
        <button className={classname}>
            {children}
            {label}
        </button>
    )
};
export default IconButton;