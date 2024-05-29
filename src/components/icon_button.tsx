import React from "react"
import { Children } from "react"
const IconButton =(label:String,classname:HTMLButtonElement ,children:React.ReactNode)=>{
    return (
        <button className={classname}>
            {children}
            {label}
        </button>
    )
};
export default IconButton;