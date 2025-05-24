import React, { useState } from "react";
import { CssBaseline, Container, Typography, TextField, Box, Button, FormControl, FormLabel } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import axios from 'axios';

function IntroEvents() {
    const [data, setData] = useState({});

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        try {
            const res = await axios.post('http://localhost:5000/introevents/createIntroEvent', data);
            console.log("Create Response", res);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    }

    return (
        <div>
            <CssBaseline />
            <Container
                sx={{
                    width: "770px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    marginTop: "70px",
                    marginLeft: "300px"
                }}
            >
                <Box
                    sx={{
                        bgcolor: "white",
                        border: "2px solid white",
                        width: "740px",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 600,
                            marginTop: "10px",
                            textAlign: "center",
                            color: "#211C84",
                        }}
                    >
                        Add Content
                    </Typography>
                    <FormControl>
                        <FormLabel>Your comment</FormLabel>
                        <Textarea
                            placeholder="Type something here…"
                            minRows={3}
                            name="comment"
                            onChange={handleInput}
                            sx={{
                                width: "400px",
                                marginTop: "20px",
                            }}
                        />
                        <TextField
                            label="Enter Youtube Link"
                            variant="outlined"
                            fullWidth
                            name="youtubelink"
                            onChange={handleInput}
                            sx={{
                                width: '400px',
                                marginTop: '30px',
                                margin: '20px 0',
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            fullWidth
                            sx={{
                                height: '40px',
                                fontSize: '14px',
                                marginTop: '30px',
                                margin: '20px',
                                backgroundColor: "#211C84",
                                marginLeft:"0px"
                            }}
                        >
                            Submit Content
                        </Button>
                    </FormControl>
                </Box>
            </Container>
        </div>
    );
}

export default IntroEvents;
