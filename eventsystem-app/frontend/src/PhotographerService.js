import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Card,
  CardActions,
  CardContent,
  Grid,
  CardMedia,
  Button,
  Typography,
  Container,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  ImageList,
  ImageListItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GradeIcon from '@mui/icons-material/Grade';

import { styled } from "@mui/material/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const PhotographerService = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ title: "" });

  const handleClickOpen = (eventCard) => {
    setSelectedCard(eventCard);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const featuredPhotographers = [
    {
      name: "Raj Mehta",
      specialization: "Wedding & Event Photography",
      experience: "10+ years",
      contact: "+91-9000000001",
      ratings: 4.9,
      profileImage:
        "https://static.vecteezy.com/system/resources/thumbnails/020/911/732/small/profile-icon-avatar-icon-user-icon-person-icon-free-png.png",
      galleryImages: [
        "https://www.theknot.com/tk-media/images/72241d24-e14d-4cca-98a6-9af1d06b95cf",
        "https://soundspirit.in/wp-content/uploads/home-we-0.jpg",
        "https://studioniramit.com/wp-content/uploads/2014/11/Corporate-Event-Shots-033.jpg",
        "https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg",
        "https://www.davidbroadway.com.au/images/porftolio/corporate-events/190921_UDIA_AFE_11.JPG",
        "https://www.lumierephotographysg.com/wp-content/uploads/2014/03/Ilight-installation-collage-1-low-res.jpg",
      ],
      pricing: "Starting at ₹25,000 per event",
    },
    {
      name: "Sneha Verma",
      specialization: "Traditional & Candid Photography",
      experience: "8 years",
      contact: "+91-9000000002",
      ratings: 4.8,
      profileImage:
        "https://static.vecteezy.com/system/resources/thumbnails/020/911/732/small/profile-icon-avatar-icon-user-icon-person-icon-free-png.png",
      galleryImages: [
        "https://example.com/sneha-prewedding1.jpg",
        "https://example.com/sneha-corporate2.jpg",
      ],
      pricing: "Packages start from ₹30,000",
    },
    {
      name: "Arjun Singh",
      specialization: "Luxury Wedding & Pre-Wedding Shoots",
      experience: "12 years",
      contact: "+91-9000000003",
      ratings: 4.7,
      profileImage:
        "https://static.vecteezy.com/system/resources/thumbnails/020/911/732/small/profile-icon-avatar-icon-user-icon-person-icon-free-png.png",
      galleryImages: [
        "https://example.com/arjun-luxury1.jpg",
        "https://example.com/arjun-wedding2.jpg",
      ],
      pricing: "Luxury packages start from ₹50,000",
    },
     {
      name: "Arjun Singh",
      specialization: "Luxury Wedding & Pre-Wedding Shoots",
      experience: "12 years",
      contact: "+91-9000000003",
      ratings: 4.7,
      profileImage:
        "https://static.vecteezy.com/system/resources/thumbnails/020/911/732/small/profile-icon-avatar-icon-user-icon-person-icon-free-png.png",
      galleryImages: [
        "https://example.com/arjun-luxury1.jpg",
        "https://example.com/arjun-wedding2.jpg",
      ],
      pricing: "Luxury packages start from ₹50,000",
    },
  ];

  return (
    <section
      id="catering"
      className="catering-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage:
          "url('https://img.freepik.com/free-psd/top-view-travel-objects_23-2151209699.jpg?t=st=1747045439~exp=1747049039~hmac=0200c8b044588adbbb8c24e5ea5ea5a756cf676c8fb03ab9b86175985c587bef&w=1800')",
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
     
        <Container maxWidth="lg">
          <Divider sx={{ marginBottom: "1.5rem" }} />
          <Grid container spacing={3} justifyContent="center">
            {featuredPhotographers.map((photographer, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ width: 250, maxWidth: "100%" }}>
                  <CardMedia
                    sx={{ width: "100%", aspectRatio: "1 / 1" }}
                    image={photographer.profileImage} // Displaying the first image
                    title={photographer.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {photographer.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {photographer.specialization}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {photographer.experience}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      <GradeIcon
                        sx={{ color: "#FFDF00", verticalAlign: "bottom" }}
                      />{" "}
                      {photographer.ratings} | {photographer.pricing}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      size="small"
                      onClick={() => handleClickOpen(photographer)}
                    >
                      Show Gallery
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle
              sx={{
                m: 0,
                p: 2,
                backgroundColor: "#f8f9fa",
                fontWeight: "bold",
                color: "#333",
                textAlign: "center",
                borderBottom: "1px solid #ddd",
              }}
            >
              {selectedCard.name} - <strong> Photoshooter </strong>
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent
              dividers
              sx={{
                padding: "24px",
                backgroundColor: "#fefefe",
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                  <ImageList
                    sx={{ width: 500, height: 450 }}
                    cols={2}
                    rowHeight={200}
                  >
                    {selectedCard && selectedCard.galleryImages
                      ? selectedCard.galleryImages.map((gimage, idx) => (
                          <ImageListItem key={selectedCard.title}>
                            <img
                              srcSet={`${gimage}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                              src={`${gimage}?w=164&h=164&fit=crop&auto=format`}
                              alt={selectedCard.title}
                              loading="lazy"
                            />
                          </ImageListItem>
                        ))
                      : ""}
                  </ImageList>
                </Grid>
              </Grid>
            </DialogContent>
          </BootstrapDialog>
        </Container>
      
    </section>
  );
};

export default PhotographerService;
