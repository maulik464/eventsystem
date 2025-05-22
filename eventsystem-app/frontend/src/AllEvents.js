import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const AllEvents = () => {
  const currentDate = new Date();

  const events = [
    {
      id: 1,
      name: "Industry Insight Summit",
      date: "2025-03-30",
      location: "Surat",
      description:
        "This event will cover industry trends and actionable insights.",
      image:
        "https://assets-global.website-files.com/63c71d27cc7ad93d54323c89/64ada4493962e5abcce30826_insight-summit.webp",
    },
    {
      id: 2,
      name: "Industry Insight Summit",
      date: "2025-03-30",
      location: "Surat",
      description:
        "This event will cover industry trends and actionable insights.",
      image:
        "https://fthmb.tqn.com/DEiZtLM7YBGBqYfl4jDdiEj0wfs=/3074x2196/filters:fill(auto,1)/corporate-580e8bbf3df78c2c73adc69a.jpg",
    },
    {
      id: 3,
      name: "Industry Insight Summit",
      date: "2025-03-30",
      location: "Surat",
      description:
        "This event will cover industry trends and actionable insights.",
      image:
        "https://townsquare.media/site/812/files/2020/05/concert-crowd-image.jpg?w=1200",
    },
    {
      id: 4,
      name: "Industry Insight Summit",
      date: "2025-03-30",
      location: "Surat",
      description:
        "This event will cover industry trends and actionable insights.",
      image:
        "https://i1.wp.com/neutrinobursts.com/wp-content/uploads/2019/05/social-event-ideas-neutrino-burst-1.jpg",
    },
    {
      id: 5,
      name: "Developers Connect Meetup",
      date: "2025-03-25",
      location: "Ahmedabad",
      description: "A meetup for passionate developers to network and learn.",
      image: "https://static.chotot.com/storage/careers/2023/05/IMG_9548.JPG",
    },
    {
      id: 6,
      name: "Developers Connect Meetup",
      date: "2025-03-25",
      location: "Ahmedabad",
      description: "A meetup for passionate developers to network and learn.",
      image:
        "https://www.infobip.com/developers/wp-content/uploads/2023/12/5-1024x635.jpg",
    },
  ];

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) > currentDate
  );
  const pastEvents = events.filter(
    (event) => new Date(event.date) <= currentDate
  );

  return (
    <section
      id="events"
      className="events-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        background:
          "url('https://img.freepik.com/premium-psd/free-psd-neon-spotlights_1046120-173.jpg?w=826')",
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="lg" sx={{ color: "#000" }}>
        {/* Upcoming Events Section */}
        <Typography
          variant="overline"
          gutterBottom
          sx={{ display: "block", fontSize: "1.2em" }}
        >
          Upcoming Events
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ width: 300, maxWidth: "100%" }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={event.image}
                    title={event.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {event.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {event.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button size="small">View More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>No upcoming events</Typography>
          )}
        </Grid>

        {/* Past Events Section */}
        <Typography
          variant="overline"
          gutterBottom
          sx={{ display: "block", fontSize: "1.2em", marginTop: "2em" }}
        >
          Past Events
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {pastEvents.length > 0 ? (
            pastEvents.map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ width: 300, maxWidth: "100%" }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={event.image}
                    title={event.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {event.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {event.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button size="small">View More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>No past events</Typography>
          )}
        </Grid>
      </Container>
    </section>
  );
};

export default AllEvents;
