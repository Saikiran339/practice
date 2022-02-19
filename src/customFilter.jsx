import React, { useEffect, useState } from "react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Button, Paper } from "@material-ui/core";
import CustomCheckbox from "./customCheckbox";

const CustomFilter= (props) => {
    const [options, setOptions] = useState([])
    const [open, setOpen] = useState(false);

    const [sAll, setSAll] = useState(false);
    console.log(props.selectAll);
    useEffect (() => {
        // setOpen(props.open)
        setOptions(props.options)

    }, [])

    const handleClick = () => {
        console.log(open , "-----")
        setOpen(!open)
    }

    const handleCheck  = (event)=>{
        console.log(event)
    }

    const selectAll  = (checked)=>{
        const newOptions  = options.map(option=>{
            option.checked=checked
            return option
        })
        setOptions(newOptions)
    }

    return (
        <>
           <div>
            <Button onClick={handleClick}>{props.name}</Button>
            { open? <Paper elevation={1} style={{width:"fit-content", padding: 8, zIndex:10, position: 'absolute'}}>
                <div>
                 <CustomCheckbox checked={sAll} onClick={selectAll} > </CustomCheckbox> <span>Select All</span>
                 </div>
                 {options.map(option =>{
                     return <div>
                     <CustomCheckbox checked={option.checked} onClick={handleCheck}> </CustomCheckbox> <span>{option.label}</span>
                     </div>
                 })}
                 
            </Paper>: ""}
            </div>
            
        </>
        
    )
}

export default CustomFilter;