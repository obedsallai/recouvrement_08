import React from "react";

interface IconButtonProps {
    label: string;
    classname: string;
    children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ label, classname, children }) => {
    return (
        <button className={classname}>
            {children}
            {label}
        </button>
    );
};

export default IconButton;
