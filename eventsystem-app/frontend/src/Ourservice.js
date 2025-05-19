import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import Banner1 from './images/banner1.jpeg'
import Banner2 from './images/banner2.jpeg'
import Banner3 from './images/banner3.jpeg'

const cardData = [
    {
        image: Banner1,
        title: "Corporate Event Management",
        description: "If you want to make a statement at your next corporate event, partner with Melodia Event Management Company in Ahmedabad."
    },
    {
        image: Banner2,
        title: "Wedding Planners",
        description: "Have you ever dreamed of planning the perfect wedding event to be remembered forever?"
    },
    {
        image: Banner3,
        title: "Destination Weddings",
        description: "Celebrate your special day in paradise as you enjoy a luxurious destination wedding with us!"
    }
];

function Ourservice() {
    return (
        <div>
            <div className="container" style={{ marginTop: '60px' }}>
                <p>OUR Services</p>
                <h2>Services by Company Event Management</h2>
                <p>
                    Company Event Management is a certified ISO 9001:2015 event management company based in the state of Kerala, South India. We offer excellent, comprehensive event management services, including personal event planning, corporate events and conferences, private parties, trade exhibitions, virtual event management services, and entertaining stage shows all over Kerala. Feel free to contact us.
                </p>
                <div className="row">
                    {cardData.map((card, index) => (
                        <div className="col-md-4" key={index}>
                            <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}>
                                <CardMedia
                                    sx={{ height: 160 }}
                                    image={card.image}
                                    title={card.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="div">
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
                <div className="row" style={{marginTop:'15px'}}>
                    {cardData.map((card, index) => (
                        <div className="col-md-4" key={index}>
                            <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}>
                                <CardMedia
                                    sx={{ height: 160 }}
                                    image={card.image}
                                    title={card.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="div">
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
    );
}

export default Ourservice;
