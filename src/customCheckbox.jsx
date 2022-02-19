import React, { useEffect, useState } from "react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const CustomCheckbox = (props) => {
    const [checked, setChecked] = useState(props.checked);
    
    useEffect (() => {
        setChecked(props.checked)
    }, [props.checked])

    const handleClick = () => {
        setChecked(!checked)
        props.onClick(!checked)
    
    }

    return (
        <span onClick={handleClick}>
            {checked?
            <CheckBoxIcon/>:
            <CheckBoxOutlineBlankIcon/>
            }
        </span>
    )
}

export default CustomCheckbox;