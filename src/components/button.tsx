import React from 'react';

interface ButtonProps {
    label: string;
    classname: string;
    Type: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ label, classname, Type }) => {
    return (
        <button className={classname} type={Type}>
            {label}
        </button>
    );
};

export default Button;
