import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  TextField,
  CssBaseline,
  Container,
  Stack,
  Box,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Dialog,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

function Mainbanner() {
  const [textField, setTextField] = useState("");
  const [file, setFile] = useState(null);
  const [bannerposition, setBannerPosition] = useState("")
  const [record, setRecord] = useState([]);
  const [open, setOpen] = useState(false);
  const [update, doUpdate] = useState(false);
  const [dataAlert, SetDataAlert] = useState({ open: false, message: "" });
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedDeleteId, setSelectedDeleteId] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [maxWidth, setMaxWidth] = useState("md");
  const [fullWidth, setFullWidth] = useState(true);

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

  const handleTextChange = (event) => {
    setTextField(event.target.value);
  };

  const handleBannerPositiom = (event) => {
    setBannerPosition(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {

    const formData = new FormData();
    formData.append("text", textField);
    formData.append("file", file);
    formData.append("bannerposition", bannerposition)

    try {
      const addRes = await axios.post(
        "http://localhost:5000/mainbanner/addNewBanner",
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
    await getBanners();
    doUpdate(!update);
    setIsEditMode(false);
  };

  const getBanners = async () => {
    try {
      const resBannners = await axios.get("http://localhost:5000/mainbanner/getBanner")
      console.log("Banners Data", resBannners.data);
      const bannersData = resBannners.data.data || [];
      setRecord(bannersData);
      doUpdate(!update);
    } catch (error) {
      console.error("Error fetching expense data:", error);
    }
  }

  useEffect(() => {
    getBanners();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
    setIsEditMode(false);
  };

  const handleEdit = (item) => {
    setIsEditMode(true);
    setOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/mainbanner/deleteBanner?Mainbannerid=${selectedDeleteId}`
      );
      const updatedRecords = record.filter(
        (item) => item._id !== selectedDeleteId
      );
      setRecord(updatedRecords);
      SetDataAlert({ open: true, message: "Data Deleted Successfully." });
      await getBanners();
    } catch (error) {
      console.error("Error deleting data:", error);
      SetDataAlert({ open: true, message: "Error deleting data." });
    } finally {
      setDeleteDialogOpen(false);
      setSelectedDeleteId(null);
    }
  };

  const confirmDelete = (id) => {
    setSelectedDeleteId(id);
    setDeleteDialogOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEditMode(false);
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
              // width:"800px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              marginLeft: '0px'
            }}
          >
            <Box
              sx={{
                bgcolor: "white",
                border: "2px solid white",
                // width:"800px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  marginTop: "20px",
                  textAlign: "center",
                  color: "#211C84",
                }}
              >
                Add New Banner
              </Typography>
              <TextField
                label="Enter Image Text"
                variant="outlined"
                fullWidth
                value={textField}
                onChange={handleTextChange}
                sx={{

                  width: '350px',
                  marginTop: '30px',
                  margin: '20px'
                }}
              />
              <TextField
                label="Enter Banner Position"
                variant="outlined"
                fullWidth
                value={bannerposition}
                onChange={handleBannerPositiom}
                sx={{

                  width: '350px',
                  marginTop: '30px',
                  margin: '20px'
                }}
              />
              {/* Upload File Button */}
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                fullWidth
                sx={{
                  height: '40px',
                  width: '350px',
                  marginTop: '30px',
                  margin: '20px',
                  fontSize: '14px',
                  backgroundColor: "#211C84",
                }}
              >
                Upload File
                <VisuallyHiddenInput type="file" onChange={handleFileChange} />
              </Button>
              
              {/* Submit Button */}
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
                  width: '350px',
                  backgroundColor: "#211C84",
                }}
              >
                Submit
              </Button>
            </Box>
            {file && (
                <Box sx={{ display: "flex", alignItems: "center", marginLeft: "24px", marginTop: "2px" }}>
                  {/* <img
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                    style={{ width: 50, height: 50, objectFit: "cover", marginRight: "10px" }}
                  /> */}
                  <Typography variant="body2">
                    Selected file: <strong>{file.name}</strong>
                  </Typography>
                </Box>
              )}
          </Container>
        </React.Fragment>
      </Dialog>
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <Box sx={{ padding: 3, width: 300 }}>
          <Typography variant="h5" gutterBottom>
            Delete Confirmation
          </Typography>
          <Typography variant="body1" gutterBottom>
            Are you sure you want to delete this expense?
          </Typography>
          <Stack direction="row" justifyContent="flex-end" spacing={2} mt={2}>
            <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleConfirmDelete}
              color="error"
              variant="contained"
            >
              Delete
            </Button>
          </Stack>
        </Box>
      </Dialog>
      <Container
        sx={{
          width: "800px",
          height: "auto",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
          marginLeft: "370px"
        }}
      >
        <Box
          sx={{
            // bgcolor: "white",
            height: "auto",
            width: "800px",
            marginTop: "80px",
            marginLeft: "0px",
            // border: "2px solid white",
          }}
        >
          <Stack sx={{ margin: "20px", marginLeft: "20px" }}>
            <Button
              variant="contained"
              sx={{
                height: "50px",
                width: "200px",
                fontSize: 20,
                backgroundColor: "#211C84",
                marginTop: '20px'
              }}
              onClick={() => {
                handleClickOpen();
              }}
            >
              <AddIcon />add Banner
            </Button>
          </Stack>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              marginTop: "20px",
              textAlign: "center",
              color: "#211C84",
            }}
          >
            BANNERS
          </Typography>
          <Table sx={{ marginTop: "20px" }}>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Banner Position</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(record) && record.length > 0 ? (
                record.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>{item.imagetext}</TableCell>
                    <TableCell>
                      {item.image && (
                        <img
                          src={`http://localhost:5000/uploads/${item.image}`}
                          alt="Preview"
                          style={{ width: "50px", height: "50px", objectFit: "contain" }}
                        />
                      )}
                    </TableCell>
                    <TableCell>{item.bannerposition}</TableCell>
                    <TableCell>
                      <Button
                        sx={{ color: "#211C84", }}
                        onClick={() => handleEdit(item)}
                        startIcon={<EditIcon />}
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        sx={{ color: "#ab2a20" }}
                        onClick={() => confirmDelete(item._id)}
                        startIcon={<DeleteIcon />}
                      />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Box>
      </Container>
    </div>
  );
}

export default Mainbanner;
