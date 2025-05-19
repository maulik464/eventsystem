import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Typography } from "@mui/material";
import { Link,useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
// import { auth } from '../config/Firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    let navigate=useNavigate()
    const [email, setEmail] = React.useState('')
    const [password,setPassword]=React.useState();
    
    //  const signIn = async () => {
    //         try {
    //             await signInWithEmailAndPassword(auth, email, password)
    //             {navigate('/UserCreation') }
    //         }
    //         catch (err) {
    //             console.log(err)
    //             alert('error')
    //         }
    //     }
   
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleChangeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    // console.log(auth?.currentUser?.email);
    return (
        <div>
            <NavBar/>
            <React.Fragment>
                <CssBaseline />
                <Container  sx={{ 
                    boxShadow:'0px 4px 12px rgba(0, 0, 0, 0.5)',
                    height: '430px', 
                    width: '440px',
                    bgcolor: 'white',
                    }}>
                    <Box sx={{ 
                         bgcolor: 'white',
                        height: '420px', 
                        width: '410px', 
                        marginTop: '40px', 
                        border: "2px solid white" 
                        }} >
                        <Typography variant="h4" sx={{
                            fontWeight:600,
                            marginTop:"50px",
                            textAlign:"center",
                            color: "#211C84",
                        }}>Login</Typography>
                        <TextField
                            sx={{ marginTop: "80px",
                                marginLeft:"20px",
                                width:"40ch",color:"red"}}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            placeholder="Email"
                            onChange={(e)=>{
                                handleChangeEmail(e)
                             }}
                            />

                        <FormControl sx={{ m: 1, 
                            width: '40ch',
                            marginTop:"20px",marginLeft:"20px"
                             }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                placeholder="Enter password"
                                onChange={(e)=>{
                                    handlePassword(e)
                                }}
                            />
                        </FormControl>
                        <Stack spacing={2} direction="row" sx={{marginLeft:'100px',marginTop:"10px",paddingLeft:"35px"}}>
                             <Button variant="contained" sx={{height:"45px",width:"120px",marginLeft:"20px",backgroundColor:"#211C84"}} 
                            //  onClick={()=>{
                            //     signIn()
                            //  }}
                             >Login</Button>
                        </Stack>
                        <Typography sx={{marginLeft:"30px",marginTop:"10px"}}>Click Here For New User 
                            <Link to="/Registration"> Registration</Link>
                        </Typography>
                    </Box>
                </Container>
            </React.Fragment>
        </div>
    )
}
export default Login