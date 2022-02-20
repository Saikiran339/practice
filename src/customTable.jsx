import React, { useEffect, useState } from "react"
import  {Checkbox, Container, Paper} from "@mui/material";
import { Box, padding } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import CustomCheckbox from './customCheckbox';
import { SelectAll } from "@material-ui/icons";
import CustomFilter from "./customFilter";



const CustomTable = ()=>{

    const [rowData, setRowData] = useState([]);
    const [colDefs, setColDefs] = useState([]);
    const [colDefChecked, setColDefChecked]  = useState(false)
    // colDefs
    const handleDelete =(id)=> {
        console.log(id);
        const newRowData   = rowData.filter(i=> i.id!=id)
        setRowData(newRowData)
    }
        
    const [RowData] = useState(rowData);
    const [ColDefs] = useState(colDefs);
    const selectAll = (checked) => {
        console.log("00---", checked)
        const newRowData = rowData.map(i=>{
            i.checked=checked
            return i;
        })
        setRowData(newRowData)
    }

useEffect (() => {
    setRowData(  [
        {
           id: "1" ,
            name: "Wayne Rooney",
         company: "DC United", 
         status: "Active", 
         lastUpdated: "7/07/2017", 
         notes: "ManUtd Highest Scorer "
        },
        {
            id: "2" ,
            name: "Ryan Giggs",
        company: "Manchester United", 
        status: "Closed", 
        lastUpdated: "3/08/2011", 
        notes: "Most Matches Played "
       },
       {
        id: "3" ,
        name: "Zlatan Ibrahimovic",
       company: "LA Galaxy", 
       status: "Active", 
       lastUpdated: "3/09/2018", 
       notes: "Iam Zlatan"
      }])

      setColDefs([
        {label:"Name", key: "name" },
        {label:"Company", key: "company"},
        {label:"Status", key: "status"},
        {label:"Last Updated", key: "lastUpdated"},
        {label:"Notes", key: "notes"},
      ])
},[])
    const colOrder= colDefs.map(i=> {
        return i.key;
    })

    const companyOptions = [
        {
            label: "DC United"
        },
        {
            label: "Manchester United"
        },
        {
            label: "LA Galaxy"
        },
      ]

    const statusOptions  = [
        {
            label: "Active"
        },
        {
            label: "Closed"
        },
    ]
    return (<>
    <Box sx={{mb: 8, display: "flex"}}>
        
    <CustomFilter options={companyOptions} name="Company"></CustomFilter>
    <CustomFilter options={statusOptions} name="Status"></CustomFilter>
    </Box>
        <div style={{overflow: 'scroll',
        width: '90%',
        height: 120}}>  
            

        {/* TODO: column defintions */}
       <div  style={{
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: 16
        }}>
              <Paper   sx={{minWidth: 56}} elevation={0} >
          {/* <Checkbox sx={{padding:0}}></Checkbox> */}
          <CustomCheckbox checked={colDefChecked} onClick={selectAll}/>
          </Paper>    
           {colDefs.map(col=>{
               switch(col.type){
                   case "action":
                    return < >
                    </>
                     default:
                        return <Paper sx={{minWidth:180}} elevation={0}><strong>{col.label}</strong>
                        </Paper>
               }
          })
        }
        </div>
                {rowData.map(row=>{              
                    return <div  style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            paddingBottom: 16
                            }}> 
                            <Paper   sx={{minWidth: 56}} elevation={0} >
                            {/* <Checkbox sx={{padding:0}}></Checkbox> */}
                            <CustomCheckbox checked={row.checked} onClick={(e)=>{console.log(e)}}/>
                            
                            </Paper>
                            {colDefs.map(col => { 
                                if(!col.type)
                                return <Paper sx={{minWidth:180}} elevation={0}>{row[col.key]}      
                             </Paper> 
                         })}
                         <DeleteIcon onClick={()=>handleDelete(row.id)}></DeleteIcon>
                         </div>
                
            // })}
            })}
        {/* TODO: rows data */}

        </div>
    </>)
}

export default CustomTable;
	
