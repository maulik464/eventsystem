import React, { useState } from "react";
import {
    Box,
    Button,
    Dialog,
    TextField,
    Typography,
    CssBaseline,
    Container
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function WeddingDestination() {
    const [open, setOpen] = useState(false);
    const [bannerPosition, setBannerPosition] = useState("");
    const [file, setFile] = useState(null);

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

    const handleBannerPositionChange = (event) => {
        setBannerPosition(event.target.value);
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

                    <TextField
                        label="Enter Banner Position"
                        fullWidth
                        value={bannerPosition}
                        onChange={handleBannerPositionChange}
                        sx={{ mb: 2 }}
                    />

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

                    <Button variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </Box>
            </Dialog>

            {/* slider 2 Dialog */}

            <CssBaseline />
            <Box sx={{ p: 4,marginTop:"30px" }}>
                <Button variant="contained" onClick={handleClickOpen}>
                   Slider 2
                </Button>
            </Box>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <Box sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        Add Slider 2 Images
                    </Typography>

                    <TextField
                        label="Enter Banner Position"
                        fullWidth
                        value={bannerPosition}
                        onChange={handleBannerPositionChange}
                        sx={{ mb: 2 }}
                    />

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

                    <Button variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </Box>
            </Dialog>

            {/* Slider 3 Dialog */}

            <CssBaseline />
            <Box sx={{ p: 4,marginTop:"30px" }}>
                <Button variant="contained" onClick={handleClickOpen}>
                   Slider 3
                </Button>
            </Box>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <Box sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        Add Slider 3 Images
                    </Typography>

                    <TextField
                        label="Enter Banner Position"
                        fullWidth
                        value={bannerPosition}
                        onChange={handleBannerPositionChange}
                        sx={{ mb: 2 }}
                    />

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

                    <Button variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </Box>
            </Dialog>

            {/* Slider 4 Dialog */}
 
            <CssBaseline />
            <Box sx={{ p: 4,marginTop:"30px" }}>
                <Button variant="contained" onClick={handleClickOpen}>
                   Slider 4
                </Button>
            </Box>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <Box sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        Add Slider 4 Images
                    </Typography>

                    <TextField
                        label="Enter Banner Position"
                        fullWidth
                        value={bannerPosition}
                        onChange={handleBannerPositionChange}
                        sx={{ mb: 2 }}
                    />

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

                    <Button variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </Box>
            </Dialog>
        </>
    );
}

export default WeddingDestination;
