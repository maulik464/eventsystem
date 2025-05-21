import React, { useState, useEffect } from "react";
import { CssBaseline, Container, Typography, TextField,Dialog,Stack } from "@mui/material";
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import AddIcon from "@mui/icons-material/Add";

function IntroEvents() {
    const [maxWidth, setMaxWidth] = useState("md");
    const [fullWidth, setFullWidth] = useState(true);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    // setIsEditMode(false);
  };

    const handleClose = () => {
    setOpen(false);
    // setIsEditMode(false);
  };
    return (
        <div>
            <Dialog
                    open={open}
                    maxWidth={maxWidth}
                    fullWidth={fullWidth}
                    onClose={handleClose}
                  >
            <React.Fragment>
                <CssBaseline />
                <Container
                    sx={{
                        width: "900px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        // marginLeft: '180px',
                        // marginTop: "100px"
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: "white",
                            border: "2px solid white",
                            width: "900px",
                            marginInlineStart:'-24px'
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 600,
                                marginTop: "40px",
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
                                endDecorator={
                                    <Box
                                        sx={{
                                            width:'250px',
                                            display: 'flex',
                                            gap: 'var(--Textarea-paddingBlock)',
                                            pt: 'var(--Textarea-paddingBlock)',
                                            flex: 'auto'
                                        }}
                                    >
                                    </Box>
                                }
                            />
                            <TextField
                                label="Enter Youtube Link"
                                variant="outlined"
                                fullWidth
                                name="youtubelink"
                                //   value={textField}
                                //   onChange={handleTextChange}
                                sx={{

                                    width: '350px',
                                    marginTop: '30px',
                                    margin: '20px'
                                }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                //   onClick={handleSubmit}
                                fullWidth
                                sx={{
                                    height: '40px',
                                    fontSize: '14px',
                                    marginTop: '30px',
                                    margin: '20px',
                                    width: '350px',
                                    color:'white',
                                    backgroundColor: "#211C84",
                                }}
                            >
                                Submit
                            </Button>
                        </FormControl>
                    </Box>
                </Container>
            </React.Fragment>
        </Dialog>
        <Stack sx={{ margin: "20px", marginLeft: "200px",marginTop:'50px' }}>
            <Button
              variant="contained"
              sx={{
                height: "50px",
                width: "200px",
                fontSize: 20,
                backgroundColor: "#211C84",
                marginTop:'20px',
                color:'white'
              }}
              onClick={() => {
                handleClickOpen();
              }}
            >
              <AddIcon />add Content
            </Button>
          </Stack>
        </div>
    )
}

export default IntroEvents
