import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import React from "react"

const SnackBar: React.FC<any> = ({children}) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}

export default SnackBar;