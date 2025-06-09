import React, { useState } from "react";
import {
    Box,
    Button,
    Dialog,
    Typography,
    CssBaseline
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";

function WeddingDestination() {
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [update, doUpdate] = useState(false);

    const handleSubmit = async () => {
    
        const formData = new FormData();
        formData.append("file", file);
    
        try {
          const addRes = await axios.post(
            "http://localhost:5000/weddingdestination/addSlider1Image",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log("Create Response", addRes.data);
        } catch (error) {
          console.error("Error submitting data:", error);
        }
        setOpen(false);
        // await getBanners();
        doUpdate(!update);
        // setIsEditMode(false);
      };

    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <>
            <CssBaseline />
            <Box sx={{ p: 4,marginTop:"30px" }}>
                <Typography variant="h4" gutterBottom>
                    Wedding Destination Page
                </Typography>
                <Button variant="contained" onClick={handleClickOpen}>
                   Slider 1
                </Button>
            </Box>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <Box sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        Add Slider 1 Images
                    </Typography>
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        fullWidth
                        sx={{ mb: 2 }}
                    >
                        Upload File
                        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                    </Button>

                    {file && (
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Selected file: <strong>{file.name}</strong>
                        </Typography>
                    )}

                    <Button variant="contained" onClick={handleSubmit} color="primary" fullWidth>
                        Submit
                    </Button>
                </Box>
            </Dialog> 
        </>
    );
}

export default WeddingDestination;
