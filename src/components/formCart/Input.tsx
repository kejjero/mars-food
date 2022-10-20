import {TextField} from "@mui/material";
import React, {forwardRef} from "react";
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';


const Input: any = forwardRef((props, ref) => {
    const ValidationTextField = styled(TextField)({
        '& input:valid + fieldset': {
            borderColor: '#6525A4',
        },
        '& label.Mui-focused': {
            color: '#fff',
        },
        '& .MuiInput-underline:after': {
            color: '#fff',
        },
        '& input:valid:focus + fieldset': {
            borderColor: '#6525A4',
            borderWidth: 2,
        },
        '& .MuiInputLabel-root': {
            color: '#fff',
        },
        "&:hover .MuiOutlinedInput-input": {
            color: '#fff',
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: '#6525A4',
            color: '#fff',
        },
        "& .MuiOutlinedInput-input": {
            color: '#fff'
        },
    });
    return (
        <React.Fragment>
            <ValidationTextField
                inputRef={ref}
                variant="outlined"
                margin="none"
                fullWidth
                {...props}
                className="order_input"
            >
            </ValidationTextField>
        </React.Fragment>
    )
})


export default Input;