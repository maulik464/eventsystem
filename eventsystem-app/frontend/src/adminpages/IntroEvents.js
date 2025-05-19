import React, { useState, useEffect } from "react";
import { CssBaseline, Container, Typography, TextField,Dialog,Stack } from "@mui/material";
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';
import AddIcon from "@mui/icons-material/Add";

function IntroEvents() {
    const [italic, setItalic] = React.useState(false);
    const [fontWeight, setFontWeight] = React.useState('normal');
    const [anchorEl, setAnchorEl] = React.useState(null);
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
                                            borderTop: '1px solid',
                                            borderColor: 'divider',
                                            flex: 'auto'
                                        }}
                                    >
                                        <IconButton
                                            variant="plain"
                                            color="neutral"
                                            onClick={(event) => setAnchorEl(event.currentTarget)}
                                        >
                                            <FormatBold />
                                            <KeyboardArrowDown fontSize="md" />
                                        </IconButton>
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={() => setAnchorEl(null)}
                                            size="sm"
                                            placement="bottom-start"
                                            portal
                                            sx={{ '--ListItemDecorator-size': '24px' }}
                                        >
                                            {['200', 'normal', 'bold'].map((weight) => (
                                                <MenuItem
                                                    key={weight}
                                                    selected={fontWeight === weight}
                                                    onClick={() => {
                                                        setFontWeight(weight);
                                                        setAnchorEl(null);
                                                    }}
                                                    sx={{ fontWeight: weight }}
                                                >
                                                    <ListItemDecorator>
                                                        {fontWeight === weight && <Check fontSize="sm" />}
                                                    </ListItemDecorator>
                                                    {weight === '200' ? 'lighter' : weight}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                        <IconButton
                                            variant={italic ? 'soft' : 'plain'}
                                            color={italic ? 'primary' : 'neutral'}
                                            aria-pressed={italic}
                                            onClick={() => setItalic((bool) => !bool)}
                                        >
                                            <FormatItalic />
                                        </IconButton>
                                    </Box>
                                }
                                sx={[
                                    {
                                        minWidth: 300,
                                        fontWeight,
                                    },
                                    italic ? { fontStyle: 'italic' } : { fontStyle: 'initial' },
                                ]}
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
