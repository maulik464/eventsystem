import React, {useState} from "react";
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
import {Button, Snackbar } from '@mui/material';
import {Typography } from "@mui/material";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

function Adminlogin() {
    let navigate=useNavigate()
    const [loginData,setLoginData] = useState({});
    const [dataAlert, SetDataAlert] = useState({ open: false, message: "" });
    const [update, doUpdate] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);
   
    const [showPassword, setShowPassword] = React.useState(false);

    const handleInputChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
      };

      const handleLogin = async (e) => {
        try {
          const registeredData = await axios.post(
            "http://localhost:5000/adminuser/getAdminUser",
            loginData
          );
      
          console.log("Full response:", registeredData);
          console.log("Data returned:", registeredData.data);
      
          const user = registeredData.data.data;
      
          if (user && user.username === loginData.username) {
            setErrorMessage("");
            localStorage.setItem("Isvalid", true);
            navigate("/admin");
          } else {
            setErrorMessage("Invalid username or password");
            setOpenSnackbar(true);
            localStorage.setItem("Isvalid", false);
          }
      
          doUpdate(!update);
        } catch (error) {
          console.error("Error fetching user data:", error);
          SetDataAlert({
            open: true,
            message: "Error fetching User admin data.",
          });
        }
      };
      

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    // console.log(auth?.currentUser?.email);
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container  sx={{ 
                    boxShadow:'0px 4px 12px rgba(0, 0, 0, 0.5)',
                    height: '430px', 
                    width: '440px',
                    bgcolor: 'white',
                    marginTop:"70px"
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
                        }}>Admin Login</Typography>
                        <TextField
                            sx={{ marginTop: "80px",
                                marginLeft:"20px",
                                width:"40ch",color:"red"}}
                            id="outlined-basic"
                            label="Username"
                            name="username"
                            variant="outlined"
                            placeholder="Email"
                            onChange={(e)=>{
                                handleInputChange(e)
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
                                name="password"
                                placeholder="Enter password"
                                onChange={(e)=>{
                                    handleInputChange(e)
                                }}
                            />
                        </FormControl>
                        <Stack spacing={2} direction="row" sx={{marginLeft:'100px',marginTop:"10px",paddingLeft:"35px"}}>
                             <Button variant="contained" sx={{height:"45px",width:"120px",marginLeft:"20px",backgroundColor:"#211C84"}} 
                             onClick={()=>{
                                handleLogin()
                             }}
                             >Login</Button>
                        </Stack>
                        <Typography sx={{marginLeft:"30px",marginTop:"10px"}}>Click Here For New User 
                            <Link to="/adminregistration"> Registration</Link>
                        </Typography>
                    </Box>
                </Container>
                <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        message={errorMessage}
      />
            </React.Fragment>
        </div>
    )
}
export default Adminlogin