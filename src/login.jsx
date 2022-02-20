import React from 'react';
import { Avatar, Grid, Paper, TextField, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import {useLocation, useNavigate} from 'react-router-dom';

function Login() {

    let location = useLocation();
    // const history = useHistory();
    const navigate = useNavigate();
    const paperStyle={padding: 20,height:'60vh',width:280,margin:"20px auto"}
    const btnstyle={margin: '8px 0'}
    const handleSubmit  = ()=>{
        console.log("888888")

navigate('/home');
    }
    return (
        <Grid>
            <Paper elevaton={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username' fullWidth required></TextField>
                <br></br>
                <br></br>
                <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required></TextField>
                
                <br></br>
                <br></br>
                <br></br>
                <Button href="#" onClick={handleSubmit} color='primary' fullWidth variant="contained" style={btnstyle}>Sign In</Button>
            </Paper>
        </Grid>

    )
}

export default (Login);