import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Button, TextField } from '@mui/material';
import parallaxImage from './images/parallax.png';

function InquiryForm() {
    return (
        <div>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    color: 'white',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        // backgroundImage: `url('https://imgs.search.brave.com/XdgYQzzxPzd0ugAy6d88UJpviJExJNlFoPL7EnZmtis/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzA5LzI3Lzk3/LzM2MF9GXzYwOTI3/OTc5MF9zaDdJcjZ3/Ym5kdDNRSGtGakk4/SHFnVG1Mcm51NlZu/aS5qcGc')`,
                        backgroundImage: `url(${parallaxImage})`,
                        backgroundAttachment: 'fixed',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'rgb(0, 0, 0)',
                        // opacity: 0.6,
                        zIndex: -1,
                    }}
                ></div>

                <div className="container py-5" style={{ marginTop: '100px' }}>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h6 style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>Ahmedabad Very Own Event Company</h6>
                            <h2 style={{ fontWeight: 'bold' }}>Looking for the Most Creative & Innovative Event Planners in Ahmedabad?</h2>
                            <p>
                                Imagine celebrating the most special events of your life without worrying about a single thing. Events is here to make your dream events come true! Our expert event management team offers professional event planning and management services in cities, villages, and small towns across Ahmedabad, from south to north, using creative and innovative methods to plan and curate perfect, hassle-free celebrations that will captivate your attendees.
                            </p>
                            <p>Contact us today to bring your vision to life and create unforgettable memories!</p>
                        </div>
                        <div className="col-lg-6">
                            <Box component="form" noValidate autoComplete="off" style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    placeholder="Enter your Full Name"
                                    variant="outlined"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    id="phone-number"
                                    name="phone"
                                    placeholder="Enter your Phone Number"
                                    variant="outlined"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    placeholder="Enter your Email ID"
                                    variant="outlined"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    variant="outlined"
                                    margin="normal"
                                    multiline
                                    rows={4}
                                />
                                <Button fullWidth variant="contained" style={{ backgroundColor: '#6C4AB6', color: 'white', marginTop: '10px' }}>
                                    SUBMIT
                                </Button>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InquiryForm;
