import { AppBar, Button } from "@mui/material";
import React from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Table from "./table";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Data from "./data";
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './App.css';
import CustomTable from './customTable';
import CustomCheckbox from "./customCheckbox";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Modal.setAppElement('#root')
function App () {
  // const [modalIsOpen, setModalIsOpen] = useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
        <Grid Container spacing={6}>
        <Grid item xs={12}>
        <AppBar color="transparent" position="Relative">
          <h1>Team Members &nbsp;
          <Button color="inherit" onClick={handleOpen}>Add Members <AddOutlinedIcon /> </Button>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
          <Box sx={style}>
            <h3>Add Members</h3>
            
            <h5><div style={{paddingBottom:'8px'}}>Name</div>
            <TextField fullWidth required></TextField></h5>
            <h5><div style={{paddingBottom:'8px'}}>Company</div>
            <TextField fullWidth required></TextField></h5>
            <h5><div style={{paddingBottom:'8px'}}>Status</div>
            <TextField fullWidth required></TextField></h5>
            <h5><div style={{paddingBottom:'8px'}}>Notes</div>
            <TextField fullWidth required></TextField></h5>
            <div style={{float: 'right'}}>
            <Button variant="outlined">Cancel</Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="contained">Save</Button>
            </div>
          </Box>
        </Modal>




          {/* <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            >
          <TextField label='Username' placeholder='Enter Username' fullWidth required></TextField>
          <TextField label='Email' placeholder='Enter Email' fullWidth required></TextField>
          <br></br>
          <br></br>
          <br></br>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
        </Modal> */}
          </h1>
        </AppBar>
        <br/>
        </Grid>
        <Grid item xs={12}>
        {/* <Table /> */}
        </Grid>
        </Grid>

        <Grid  container  direction="row"
            justifyContent="center"
            alignItems="center">
          
          <Grid item xs={11}>
          <br/> <br/>
              <CustomTable />
        </Grid >
        </Grid>
       {/* <CustomCheckbox></CustomCheckbox> */}
      
      </>
  );
}

export default App;