import React from "react";

interface ButtonProps {
    classname: string;
    children: React.ReactNode;
    type: "submit"|"reset"|"button";
}

const Button: React.FC<ButtonProps> = ({  classname, children,type }) => {
    return (
        <button className={classname} type={type}>
            {children}
        </button>
    );
};

export default Button;
