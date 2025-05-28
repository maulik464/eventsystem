import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Container, Dialog, DialogTitle, 
  DialogContent, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import NavBar from "./NavBar";
//import 'slick-carousel/slick/slick-theme.css';

function DecorationList() {
  let decorationData = [
    { id: 1, name: 'Royal Wedding Decorators', 
      img : 'https://media.weddingz.in/images/bbda52972b1de50671f1b9de639610de/Anais-Events-6.jpg', 
      banners: [
        "https://media.weddingz.in/images/bbda52972b1de50671f1b9de639610de/Anais-Events-6.jpg",
        "https://m.media-amazon.com/images/I/71KXgvizZ7L._AC_UF1000,1000_QL80_.jpg",
        "https://i.etsystatic.com/30918147/r/il/f97777/4492390004/il_1080xN.4492390004_h3tf.jpg",
        "https://i.pinimg.com/originals/41/60/1d/41601d892514a46b084112b5141351cd.png",
        "https://assets-news.housing.com/news/wp-content/uploads/2022/01/11220447/wedding-stage-decoration-shutterstock_1193416354-1200x700-compressed.jpg",
        "https://wallpapercave.com/wp/wp8453819.jpg",
      ],
      details: "Elegant and luxurious wedding decorations with customizable themes."
    },
    { id: 2, name: 'Corporate Event Designers', 
      img : 'https://m.media-amazon.com/images/I/71KXgvizZ7L._AC_UF1000,1000_QL80_.jpg', 
      banners: [
        "https://media.weddingz.in/images/bbda52972b1de50671f1b9de639610de/Anais-Events-6.jpg",
        "https://m.media-amazon.com/images/I/71KXgvizZ7L._AC_UF1000,1000_QL80_.jpg",
        "https://i.etsystatic.com/30918147/r/il/f97777/4492390004/il_1080xN.4492390004_h3tf.jpg",
        "https://i.pinimg.com/originals/41/60/1d/41601d892514a46b084112b5141351cd.png",
        "https://assets-news.housing.com/news/wp-content/uploads/2022/01/11220447/wedding-stage-decoration-shutterstock_1193416354-1200x700-compressed.jpg",
        "https://wallpapercave.com/wp/wp8453819.jpg"
      ],
      details: "Professional event setups for corporate gatherings and conferences."
    },
    { id: 3, name: 'Rustic Outdoor Event Specialists', 
      img : 'https://i.etsystatic.com/30918147/r/il/f97777/4492390004/il_1080xN.4492390004_h3tf.jpg', 
      banners: [
        "https://media.weddingz.in/images/bbda52972b1de50671f1b9de639610de/Anais-Events-6.jpg",
        "https://m.media-amazon.com/images/I/71KXgvizZ7L._AC_UF1000,1000_QL80_.jpg",
        "https://i.etsystatic.com/30918147/r/il/f97777/4492390004/il_1080xN.4492390004_h3tf.jpg",
        "https://i.pinimg.com/originals/41/60/1d/41601d892514a46b084112b5141351cd.png",
        "https://assets-news.housing.com/news/wp-content/uploads/2022/01/11220447/wedding-stage-decoration-shutterstock_1193416354-1200x700-compressed.jpg",
        "https://wallpapercave.com/wp/wp8453819.jpg"
      ],
      details: "Beautiful outdoor event styling with rustic and natural themes."
    },
    { id: 4, name: 'Luxury Party Planners', 
      img : 'https://i.pinimg.com/originals/41/60/1d/41601d892514a46b084112b5141351cd.png', 
      banners: [
        "https://media.weddingz.in/images/bbda52972b1de50671f1b9de639610de/Anais-Events-6.jpg",
        "https://m.media-amazon.com/images/I/71KXgvizZ7L._AC_UF1000,1000_QL80_.jpg",
        "https://i.etsystatic.com/30918147/r/il/f97777/4492390004/il_1080xN.4492390004_h3tf.jpg",
        "https://i.pinimg.com/originals/41/60/1d/41601d892514a46b084112b5141351cd.png",
        "https://assets-news.housing.com/news/wp-content/uploads/2022/01/11220447/wedding-stage-decoration-shutterstock_1193416354-1200x700-compressed.jpg",
        "https://wallpapercave.com/wp/wp8453819.jpg"
      ],
      details: "Extravagant and high-end decor for elite parties and celebrations."
    },
    { id: 5, name: 'Cultural Event Decorators', 
      img : 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/11220447/wedding-stage-decoration-shutterstock_1193416354-1200x700-compressed.jpg', 
      banners: [
        "https://media.weddingz.in/images/bbda52972b1de50671f1b9de639610de/Anais-Events-6.jpg",
        "https://m.media-amazon.com/images/I/71KXgvizZ7L._AC_UF1000,1000_QL80_.jpg",
        "https://i.etsystatic.com/30918147/r/il/f97777/4492390004/il_1080xN.4492390004_h3tf.jpg",
        "https://i.pinimg.com/originals/41/60/1d/41601d892514a46b084112b5141351cd.png",
        "https://assets-news.housing.com/news/wp-content/uploads/2022/01/11220447/wedding-stage-decoration-shutterstock_1193416354-1200x700-compressed.jpg",
        "https://wallpapercave.com/wp/wp8453819.jpg"
      ],
      details: "Traditional and cultural decorations for festivals and heritage events."
    },
    { id: 6, name: 'Destination Wedding Experts', 
      img : 'https://wallpapercave.com/wp/wp8453819.jpg', 
      banners: [
        "https://media.weddingz.in/images/bbda52972b1de50671f1b9de639610de/Anais-Events-6.jpg",
        "https://m.media-amazon.com/images/I/71KXgvizZ7L._AC_UF1000,1000_QL80_.jpg",
        "https://i.etsystatic.com/30918147/r/il/f97777/4492390004/il_1080xN.4492390004_h3tf.jpg",
        "https://i.pinimg.com/originals/41/60/1d/41601d892514a46b084112b5141351cd.png",
        "https://assets-news.housing.com/news/wp-content/uploads/2022/01/11220447/wedding-stage-decoration-shutterstock_1193416354-1200x700-compressed.jpg",
        "https://wallpapercave.com/wp/wp8453819.jpg"
      ],
      details: "Expert decorators for dreamy destination weddings at exotic locations."
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedDecorator, setSelectedDecorator] = useState(null);

  const handleOpen = (decorator) => {
    setSelectedDecorator(decorator);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDecorator(null);
  };

  const sliderSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (    
    <Container>
      <NavBar/>
      <Typography variant="h3" align="center" sx={{ marginTop: "10px", marginBottom: "10px", fontWeight: "bold" }}>
        Decorator List
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: "center", padding: 3 }}>
        {decorationData.map((val) => (
          <Card key={val.id} sx={{ maxWidth: 345, flexBasis: "30%"}}>
            <Box sx={{ width: "100%", height: 140, overflow: "hidden" }}>
              <CardMedia component="img" sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px 8px 0 0" }} 
              image={val.img} />
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5">{val.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {val.details}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleOpen(val)}>Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>

      {/* Popup Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedDecorator?.name}
          <IconButton 
            aria-label="close" 
            onClick={handleClose} 
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {selectedDecorator?.details}
          </Typography>
          <Slider {...sliderSettings}>
            {selectedDecorator?.banners.map((img, index) => (
              <Box key={index} style={{ textAlign: "center", width: "100%", height: 400, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" }}>
                <img src={img} alt={`Banner ${index + 1}`} style={{ width: "auto", height: "100%", maxWidth: "100%", objectFit: "contain", borderRadius: "8px" }} />
              </Box>
            ))}
          </Slider>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default DecorationList;