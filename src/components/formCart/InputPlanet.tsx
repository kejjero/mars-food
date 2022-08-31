import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React, {forwardRef} from "react";
import {styled} from "@mui/material/styles";
import {TextField} from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";

const InputPlanet: any = forwardRef((props: any, ref: any) => {
    const ValidationTextField = styled(TextField)({
        '& input:valid + fieldset': {
            borderColor: '#6525A4',
        },
        '& label.Mui-focused': {
            color: '#fff',
        },
    });

    return (
        <div>
            <FormControl size={props.size}>
                <InputLabel>Планета</InputLabel>
                <Select
                    onChange={props.onChange}
                    label={props.label}
                >
                    <MenuItem value={10}>Марс</MenuItem>
                    <MenuItem value={20}>Сатурн</MenuItem>
                    <MenuItem value={30}>Земля</MenuItem>
                </Select>
            </FormControl>
            <FormHelperText style={{color: '#EF4137'}}>Errors</FormHelperText>
        </div>

    )
})


export default InputPlanet;