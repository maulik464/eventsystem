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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { styled } from "@mui/material/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CatererService = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ title: "" });

  var reviewSliderSettings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    speed: 1500,
    autoplaySpeed: 3000,
  };

  const gallerySettings = {
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
  };

  const handleClickOpen = (eventCard) => {
    setSelectedCard(eventCard);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const options = [
    {
      title: "Wedding Catering",
      description: "Elegant menu for your big day.",
      mainImageUrl:
        "https://images.squarespace-cdn.com/content/v1/63cae41a333ef829d79269a0/b211353c-cc8a-448f-a2ff-698983c17d39/Cateringwedding.jpg",
      features: [
        // List of features or highlights
        "Customizable menus tailored to your preferences.",
        "Professional staff and on-site service.",
        "Exclusive dishes for special events.",
      ],
      galleryImages: [
        "https://www.weddingbellcaterer.com/wp-content/uploads/2025/03/wedding-catering-service-at-topsia-tiljala-Science-city-area.jpg",
        "https://www.weddingbellcaterer.com/wp-content/uploads/2025/03/rice-ceremony-catering-at-kestopur.jpg",
        "https://www.weddingbellcaterer.com/wp-content/uploads/2025/03/top-catering-service-aalap-banquet-kamarhati.jpg",
        "https://www.weddingbellcaterer.com/wp-content/uploads/2024/10/top-caterers-near-avishikta-purbachalhaltu-kalitala.jpg",
        "https://www.weddingbellcaterer.com/wp-content/uploads/2024/07/caterers-for-frehers-party.jpg",
        "https://www.weddingbellcaterer.com/wp-content/uploads/2024/04/top-wedding-caterers-kolkata.jpg",
        "https://www.weddingbellcaterer.com/wp-content/uploads/2024/05/top-caterers-mukundapur-salad-bar.jpg",
      ],
      pricing: "Starting at ₹1500 per guest", // Pricing information
      contact: {
        // Contact details for inquiries
        email: "info@example.com",
        phone: "+91-9876543210",
      },
      ratings: 4.8, // Average rating for the category
      testimonials: [
        // Reviews or customer feedback
        {
          name: "Riya Patel",
          feedback: "The food was amazing, and the service was top-notch!",
        },
        {
          name: "Amit Sharma",
          feedback:
            "They made our wedding unforgettable with their delicious menu.",
        },
      ],
      specialNotes:
        "Book early to secure your date during peak wedding season.", // Additional notes or reminders
    },

    {
      title: "Corporate Events",
      description: "Delicious food for business events.",
      mainImageUrl: "https://happyplates.in/wp-content/uploads/2024/09/cc.jpg",
      features: [
        // List of features or highlights
        "Customizable menus tailored to your preferences.",
        "Professional staff and on-site service.",
        "Exclusive dishes for special events.",
      ],
      pricing: "Starting at ₹1500 per guest", // Pricing information
      contact: {
        // Contact details for inquiries
        email: "info@example.com",
        phone: "+91-9876543210",
      },
      ratings: 4.8, // Average rating for the category
      testimonials: [
        // Reviews or customer feedback
        {
          name: "Riya Patel",
          feedback: "The food was amazing, and the service was top-notch!",
        },
        {
          name: "Amit Sharma",
          feedback:
            "They made our wedding unforgettable with their delicious menu.",
        },
      ],
      specialNotes:
        "Book early to secure your date during peak wedding season.", // Additional notes or reminders
    },
    {
      title: "Private Parties",
      description: "Customized menu for intimate gatherings.",
      mainImageUrl:
        "https://thebutlerdiditps.com/wp-content/uploads/2024/10/Can-I-Hire-Caterers-for-a-Small-Private-Party-1024x683.jpg",
      features: [
        // List of features or highlights
        "Customizable menus tailored to your preferences.",
        "Professional staff and on-site service.",
        "Exclusive dishes for special events.",
      ],
      pricing: "Starting at ₹1500 per guest", // Pricing information
      contact: {
        // Contact details for inquiries
        email: "info@example.com",
        phone: "+91-9876543210",
      },
      ratings: 4.8, // Average rating for the category
      testimonials: [
        // Reviews or customer feedback
        {
          name: "Riya Patel",
          feedback: "The food was amazing, and the service was top-notch!",
        },
        {
          name: "Amit Sharma",
          feedback:
            "They made our wedding unforgettable with their delicious menu.",
        },
      ],
      specialNotes:
        "Book early to secure your date during peak wedding season.", // Additional notes or reminders
    },
    {
      title: "Birthday Catering",
      description:
        "Celebrate your special day with a variety of delightful dishes.",
      mainImageUrl:
        "https://i0.wp.com/runningmen.my/wp-content/uploads/2021/03/DSC6529.jpg?resize=1024%2C684&ssl=1",
      features: [
        // List of features or highlights
        "Customizable menus tailored to your preferences.",
        "Professional staff and on-site service.",
        "Exclusive dishes for special events.",
      ],
      pricing: "Starting at ₹1500 per guest", // Pricing information
      contact: {
        // Contact details for inquiries
        email: "info@example.com",
        phone: "+91-9876543210",
      },
      ratings: 4.8, // Average rating for the category
      testimonials: [
        // Reviews or customer feedback
        {
          name: "Riya Patel",
          feedback: "The food was amazing, and the service was top-notch!",
        },
        {
          name: "Amit Sharma",
          feedback:
            "They made our wedding unforgettable with their delicious menu.",
        },
      ],
      specialNotes:
        "Book early to secure your date during peak wedding season.", // Additional notes or reminders
    },
    {
      title: "BBQ Catering",
      description: "Smoked meats and grilled delights for outdoor events.",
      mainImageUrl:
        "https://content3.jdmagicbox.com/v2/comp/mumbai/w3/022pxx22.xx22.140825150117.r6w3/catalogue/bombay-barbeque-restaurant-khar-west-mumbai-restaurants-r5xkl.jpg",
      features: [
        // List of features or highlights
        "Customizable menus tailored to your preferences.",
        "Professional staff and on-site service.",
        "Exclusive dishes for special events.",
      ],
      pricing: "Starting at ₹1500 per guest", // Pricing information
      contact: {
        // Contact details for inquiries
        email: "info@example.com",
        phone: "+91-9876543210",
      },
      ratings: 4.8, // Average rating for the category
      testimonials: [
        // Reviews or customer feedback
        {
          name: "Riya Patel",
          feedback: "The food was amazing, and the service was top-notch!",
        },
        {
          name: "Amit Sharma",
          feedback:
            "They made our wedding unforgettable with their delicious menu.",
        },
      ],
      specialNotes:
        "Book early to secure your date during peak wedding season.", // Additional notes or reminders
    },
    {
      title: "Buffet Catering",
      description: "All-you-can-eat spread for your guests to enjoy.",
      mainImageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/422918018/MD/TZ/MF/139980869/buffet-catering-services.jpg",
      features: [
        // List of features or highlights
        "Customizable menus tailored to your preferences.",
        "Professional staff and on-site service.",
        "Exclusive dishes for special events.",
      ],
      pricing: "Starting at ₹1500 per guest", // Pricing information
      contact: {
        // Contact details for inquiries
        email: "info@example.com",
        phone: "+91-9876543210",
      },
      ratings: 4.8, // Average rating for the category
      testimonials: [
        // Reviews or customer feedback
        {
          name: "Riya Patel",
          feedback: "The food was amazing, and the service was top-notch!",
        },
        {
          name: "Amit Sharma",
          feedback:
            "They made our wedding unforgettable with their delicious menu.",
        },
      ],
      specialNotes:
        "Book early to secure your date during peak wedding season.", // Additional notes or reminders
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
          "url('https://img.freepik.com/free-photo/spring-bright-soup-with-meatballs-vegetables-copy-space_127032-2972.jpg?t=st=1747045234~exp=1747048834~hmac=a90a30f6620de13b7c3e1c36d26adceb1931ef08ef7a52f1bdc613d257361b7f&w=1380')",
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="lg">
        <Divider sx={{ marginBottom: "1.5rem" }} />
        <Grid container spacing={3} justifyContent="center">
          {options.map((option, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ width: 300, maxWidth: "100%" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={option.mainImageUrl}
                  title={option.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {option.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {option.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    size="small"
                    onClick={() => {
                      handleClickOpen(option);
                    }}
                  >
                    View More
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
            {selectedCard.title || ""}
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
                <Slider {...gallerySettings}>
                  {selectedCard && selectedCard.galleryImages
                    ? selectedCard.galleryImages.map((gimage, idx) => (
                        <div key={idx}>
                          <img
                            src={gimage}
                            alt={selectedCard.title}
                            style={{ width: "100%" }}
                          />
                        </div>
                      ))
                    : ""}
                </Slider>
              </Grid>

              <Grid container spacing={3}>
                {/* Description and Pricing */}
                <Grid item xs={12} sm={8} className="grid-item" sx={{margin : "0 10px"}}>
                  <Typography className="typography-body" gutterBottom>
                    {selectedCard.description}
                  </Typography>
                  <Typography className="typography-body" gutterBottom>
                    <strong>Pricing:</strong> {selectedCard.pricing}
                  </Typography>
                </Grid>

                {/* Contact */}
                <Grid item xs={6} className="grid-item">
                  <Typography className="typography-contact" gutterBottom>
                    <strong>Contact:</strong>
                    <ul>
                      <li>Email: {selectedCard.contact?.email}</li>
                      <li>Phone: {selectedCard.contact?.phone}</li>
                    </ul>
                  </Typography>
                </Grid>

                {/* Features */}
                <Grid item xs={6} className="grid-item">
                  <Typography className="typography-title" gutterBottom>
                    <strong>Features:</strong>
                  </Typography>
                  <ul className="features-list">
                    {selectedCard.features?.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </Grid>

                {/* Testimonials */}
                <Grid item xs={12} className="grid-item">
                  <Typography className="typography-title" gutterBottom>
                    <strong>Testimonials:</strong>
                  </Typography>
                  <Slider {...reviewSliderSettings}>
                    {selectedCard.testimonials?.map((testimonial, index) => (
                      <div key={index} className="testimonials-list">
                        "{testimonial.feedback}" - {testimonial.name}
                      </div>
                    ))}
                  </Slider>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions
            sx={{
              backgroundColor: "#f8f9fa",
              justifyContent: "center",
              padding: "16px",
              borderTop: "1px solid #ddd",
            }}
          ></DialogActions>
        </BootstrapDialog>
      </Container>
    </section>
  );
};

export default CatererService;
