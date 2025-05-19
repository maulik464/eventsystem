import React from "react";
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
import NavBar from "./NavBar";
// import { auth, db } from '../config/Firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { setDoc, doc } from "firebase/firestore";

function Registration() {
    const [data, setData] = React.useState({})
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('');
    let navigate = useNavigate()

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleChangeForm = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    // const handleRegister = async () => {
    //     try {
    //         await createUserWithEmailAndPassword(auth, email, password)
    //         const user = auth.currentUser;

    //         if (user) {
    //             await setDoc(doc(db, "Users", user.uid), {
    //                 email: user.email,
    //                 password: password,
    //                 mobile: data.mobile,
    //                 labname: data.labname,
    //                 persontocontact: data.person,
    //                 gstno: data.gstno,
    //                 certificateno: data.labcerti,
    //             })
    //         }
    //         {navigate('/Login') }
    //     }
    //     catch (err) {
    //         console.log(err.message)
    //     }
    // }

    return (
        <div>
            <NavBar />
            <React.Fragment>
                <CssBaseline />
                <Container sx={{ width: "850px", height: "580px", boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)', }}>
                    <Box sx={{
                        bgcolor: 'white',
                        height: '580px',
                        width: "850px",
                        marginTop: "20px",
                        marginLeft: "-24px",
                        border: "2px solid white"
                    }} >
                        <Typography variant="h4" sx={{
                            fontWeight: 600,
                            marginTop: '20px',
                            textAlign: "center",
                            color: "#211C84",
                        }}>Registration</Typography>
                        <TextField
                            id="outlined-suffix-shrink"
                            label="Name"
                            variant="outlined"
                            name="name"
                            placeholder="Enter Lab Name"
                            sx={{ marginTop: "30px", width: "350px", margin: "20px" }}
                            onChange={handleChangeForm}
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
                                            Name
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
                            onChange={handleChangeEmail}
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
                            onChange={handleChangeForm}
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
                            <InputLabel htmlFor="outlined-adornment-password" onChange={handleChangeForm}>Password</InputLabel>
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
                                onChange={handlePassword}
                            />
                        </FormControl>

                        <Stack spacing={2} direction="row" sx={{ margin: "20px", marginLeft: "340px" }}>
                            <Button variant="contained"
                                sx={{ height: "50px", width: "150px",backgroundColor:"#211C84" }}
                                // onClick={() => {
                                //     handleRegister()
                                // }}
                            >Submit</Button>
                        </Stack>
                        <Typography sx={{ marginLeft: "300px" }}>
                            Already Have an Account?
                            <Link to="/login">Login</Link>
                        </Typography>
                    </Box>
                </Container>
            </React.Fragment>
        </div>
    )
}
export default Registration;