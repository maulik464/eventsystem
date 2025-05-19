import React, { useState, useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { inputBaseClasses } from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { InputLabel, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function AdminRegistration() {
    const [data, setData] = React.useState({})
    const [showPassword, setShowPassword] = React.useState(false);

    let navigate = useNavigate()

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleRegister = async (e) => {
        try{
            const res = await axios.post('http://localhost:5000/adminuser/createAdminUser',data)
            console.log("Create Response", res);
            navigate('/adminlogin');
        }catch (error){
            console.error("Error submitting data:", error);
        }
      }

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container sx={{ width: "785px", height: "385px", boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)', marginTop:"95px"}}>
                    <Box sx={{
                        bgcolor: 'white',
                        height: '385px',
                        width: "785px",
                        marginTop: "20px",
                        marginLeft: "-24px",
                        border: "2px solid white"
                    }} >
                        <Typography variant="h4" sx={{
                            fontWeight: 600,
                            marginTop: '20px',
                            textAlign: "center",
                            color: "#211C84",
                        }}>Admin Registration</Typography>
                        <TextField
                            id="outlined-suffix-shrink"
                            label="Username"
                            variant="outlined"
                            name="username"
                            placeholder="Enter Username"
                            sx={{ marginTop: "30px", width: "350px", margin: "20px" }}
                            onChange={handleInput}
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment
                                            position="end"
                                            sx={{
                                                opacity: 0,
                                                pointerEvents: 'none',
                                                [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                                                    opacity: 1,
                                                },
                                            }}>
                                            Username
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

                        <TextField
                            id="outlined-suffix-shrink"
                            label="Email"
                            variant="outlined"
                            name="email"
                            placeholder="Enter Your Email Id"
                            sx={{ marginTop: "30px", width: "350px", margin: "20px" }}
                            onChange={handleInput}
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment
                                            position="end"
                                            sx={{
                                                opacity: 0,
                                                pointerEvents: 'none',
                                                [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                                                    opacity: 1,
                                                },
                                            }}>
                                            <EmailIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }} />

                        <TextField
                            id="outlined-suffix-shrink"
                            label="Mobile No"
                            variant="outlined"
                            type="number"
                            name="mobile"
                            placeholder="Enter Mobile Number"
                            sx={{ marginTop: "30px", width: "350px", margin: "20px" }}
                            onChange={handleInput}
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment
                                            position="end"
                                            sx={{
                                                opacity: 0,
                                                pointerEvents: 'none',
                                                [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                                                    opacity: 1,
                                                },
                                            }}>
                                            <CallIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }} />

                        <FormControl sx={{ m: 3.5, width: '350px', margin: "20px" }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password" onChange={handleInput}>Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
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
                                placeholder="Enter Password"
                                onChange={handleInput}
                            />
                        </FormControl>

                        <Stack spacing={2} direction="row" sx={{ margin: "20px", marginLeft: "323px" }}>
                            <Button variant="contained"
                                sx={{ height: "50px", width: "130px",backgroundColor:"#211C84" }}
                                onClick={() => {
                                    handleRegister()
                                }}
                            >Submit</Button>
                        </Stack>
                        <Typography sx={{ marginLeft: "280px" }}>
                            Already Have an Account?
                            <Link to="/adminlogin">Login</Link>
                        </Typography>
                    </Box>
                </Container>
            </React.Fragment>
        </div>
    )
}
export default AdminRegistration;