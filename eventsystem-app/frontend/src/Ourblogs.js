import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import Banner1 from './images/banner1.jpeg'
import Banner2 from './images/banner2.jpeg'
import Banner3 from './images/banner3.jpeg'

const cardData = [
    {
        image: Banner1,
        title: "Hindu Wedding Traditions Across Various Castes in Ahmedabad",
        description: "In Kerala, Hindu weddings are done in many different ways. For example, Nair weddings."
    },
    {
        image: Banner2,
        title: "Houseboat Weddings In Kerala: A Dreamy Celebration on the Water",
        description: "Nowadays, couples are looking for special and memorable ways to tie the knot because"
    },
    {
        image: Banner3,
        title: "How to Plan a Perfect Monsoon Wedding: A Complete Guide",
        description: "Although a monsoon wedding is a beautiful as well as pleasant event, it needs"
    }
];

function Ourblogs() {
    return (
        <div>
            <div className="container" style={{ marginTop: '60px' }}>
                <p>OUR BLOGS & ARTICLES</p>
                <h2>Stories by Company Event Management</h2>
                <p>
                    On this official Company Event Management website, we offer a diverse range of blogs and stories covering various topics related to event management in Kerala. From destination wedding planning to corporate events, each blog provides valuable insights to help you plan your next event seamlessly.
                </p>
                <div className="row">
                    {cardData.map((card, index) => (
                        <div className="col-md-4" key={index}>
                            <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}>
                                <CardMedia
                                    sx={{ height: 220 }}
                                    image={card.image}
                                    title={card.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {card.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </div>
                <div className="row" style={{ marginTop: '15px' }}>
                    {cardData.map((card, index) => (
                        <div className="col-md-4" key={index}>
                            <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}>
                                <CardMedia
                                    sx={{ height: 220}}
                                    image={card.image}
                                    title={card.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {card.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Ourblogs