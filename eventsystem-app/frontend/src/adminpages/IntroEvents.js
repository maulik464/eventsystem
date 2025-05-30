import React, { useState, useEffect } from "react";
import {
    CssBaseline,
    Container,
    Typography,
    TextField,
    Box,
    Button,
    FormControl,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Snackbar,
    Alert,
    Dialog,
    Stack,
} from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from 'axios';

function IntroEvents() {
    const [data, setData] = useState({});
    const [record, setRecord] = useState([]);
    const [selectedDeleteId, setSelectedDeleteId] = useState(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [update, doUpdate] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        try {
            if (isEditMode) {
                const updateRes = await axios.put(
                    `http://localhost:5000/introevents/updateIntroEvent?CommentId=${data._id}`,
                    data
                );
                console.log("Update Response", updateRes);

                if (updateRes.data.isSuccess) {
                    setSnackbarSeverity("success");
                    setSnackbarMessage(updateRes.data.msg || "Event updated successfully!");
                } else {
                    setSnackbarSeverity("error");
                    setSnackbarMessage(updateRes.data.msg || "Failed to update event.");
                }
            } else {
                const res = await axios.post('http://localhost:5000/introevents/createIntroEvent', data);
                console.log("Create Response", res);

                if (res.data.isSuccess) {
                    setSnackbarSeverity("success");
                    setSnackbarMessage(res.data.msg || "Event created successfully!");
                } else {
                    setSnackbarSeverity("error");
                    setSnackbarMessage("Error: " + (res.data.msg || "Failed to create event."));
                }
            }

            setOpenSnackbar(true);
            await getContentData();
            doUpdate(!update);
            setData({});
            setIsEditMode(false);
        } catch (error) {
            console.error("Error submitting data:", error);
            setSnackbarSeverity("error");
            const errorMsg =
                error.response?.data?.msg ||
                error.message ||
                "An error occurred while submitting the data.";
            setSnackbarMessage(errorMsg);
            setOpenSnackbar(true);
        }
    };

    const getContentData = async () => {
        try {
            const getContent = await axios.get('http://localhost:5000/introevents/getIntroEvent');
            console.log("Get Content Data", getContent.data);
            const contentData = getContent.data.data || [];
            setRecord(contentData);
        } catch (error) {
            console.log("Data Fetching Error", error);
        }
    };

    useEffect(() => {
        getContentData();
    }, []);

    const handleConfirmDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/introevents/deleteIntroEvent?CommentId=${selectedDeleteId}`);
            setSnackbarSeverity("success");
            setSnackbarMessage("Event deleted successfully!");
            setOpenSnackbar(true);
            await getContentData();
            doUpdate(!update);
        } catch (error) {
            console.error("Error deleting data:", error);
            setSnackbarSeverity("error");
            setSnackbarMessage(error.response?.data?.msg || "Error deleting event.");
            setOpenSnackbar(true);
        } finally {
            setDeleteDialogOpen(false);
            setSelectedDeleteId(null);
        }
    };

    const handleEdit = (item) => {
        setIsEditMode(true);
        setData({ ...item });
    };

    const confirmDelete = (id) => {
        setSelectedDeleteId(id);
        setDeleteDialogOpen(true);
    };

    return (
        <div>
            <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
                <Box sx={{ padding: 3, width: 300 }}>
                    <Typography variant="h5" gutterBottom>
                        Delete Confirmation
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Are you sure you want to delete this content?
                    </Typography>
                    <Stack direction="row" justifyContent="flex-end" spacing={2} mt={2}>
                        <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleConfirmDelete} color="error" variant="contained">
                            Delete
                        </Button>
                    </Stack>
                </Box>
            </Dialog>

            <CssBaseline />
            <Container
                sx={{
                    width: "770px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    marginTop: "70px",
                    marginLeft: "300px",
                }}
            >
                <Box
                    sx={{
                        bgcolor: "white",
                        border: "2px solid white",
                        width: "740px",
                        height:"380px"
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
                        {isEditMode ? "Edit Content" : "Add Content"}
                    </Typography>
                    <FormControl component="form" onSubmit={handleSubmit}>
                        <Textarea
                            placeholder="Type something here…"
                            minRows={3}
                            name="comment"
                            value={data.comment || ""}
                            onChange={handleInput}
                            sx={{
                                height: "125px",
                                width: "400px",
                                marginTop: "20px",
                            }}
                        />
                        <TextField
                            label="Enter Youtube Link"
                            variant="outlined"
                            fullWidth
                            name="youtubelink"
                            value={data.youtubelink || ""}
                            onChange={handleInput}
                            sx={{
                                width: "400px",
                                marginTop: "30px",
                                margin: "20px 0",
                            }}
                        />
                        <Typography sx={{marginTop:"-20px", marginRight:"185px"}}>
                           Note:  Please Enter Only Embed Url
                        </Typography>
                        <Stack direction="row" spacing={2} alignItems="center" sx={{marginTop:"30px"}}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{
                                    height: "40px",
                                    fontSize: "14px",
                                    backgroundColor: "#211C84",
                                }}
                            >
                                {isEditMode ? "Update Content" : "Submit Content"}
                            </Button>
                            {isEditMode && (
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => {
                                        setIsEditMode(false);
                                        setData({});
                                    }}
                                >
                                    Cancel
                                </Button>
                            )}
                        </Stack>
                    </FormControl>
                </Box>
            </Container>

            <Table sx={{ marginTop: "20px", width: "80%", overflowX: "auto", marginLeft: "185px" }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>Content</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Youtube Link</TableCell>
                        <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>Edit</TableCell>
                        <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.isArray(record) && record.length > 0 ? (
                        record.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell sx={{ maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                    {item.comment.length > 50 ? item.comment.substring(0, 50) + "..." : item.comment}
                                </TableCell>
                                <TableCell>
                                    <a href={item.youtubelink} target="_blank" rel="noreferrer">
                                        {item.youtubelink}
                                    </a>
                                </TableCell>
                                <TableCell sx={{ textAlign: "center" }}>
                                    <Button onClick={() => handleEdit(item)} startIcon={<EditIcon />} variant="outlined" />
                                </TableCell>
                                <TableCell sx={{ textAlign: "center" }}>
                                    <Button
                                        sx={{ color: "red" }}
                                        onClick={() => confirmDelete(item._id)}
                                        startIcon={<DeleteIcon />}
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={4} align="center">
                                No data available
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
                <Alert
                    onClose={() => setOpenSnackbar(false)}
                    severity={snackbarSeverity}
                    sx={{ width: "100%" }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default IntroEvents;
