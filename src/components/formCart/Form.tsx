import React from "react";

const Form: React.FC<any> = ({children, ...props}) => {
    return (
        <form {...props} noValidate>
            {children}
        </form>
    );
};

export default Form;