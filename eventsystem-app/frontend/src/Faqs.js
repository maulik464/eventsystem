import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Faqs() {
    return (
        <div>
            <div className="container" style={{ marginTop: '60px' }}>
                <p>Do you have any other questions?</p>
                <h2>Please check these FAQs.</h2>
                <div className="row">
                    <div className="col-md-6">
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography component="span">How much does event management cost in Ahmedabad?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                The cost of event management services depends on the type of event you are planning to organise in Kerala. The average price range for event management services is from 3 lakhs to 15 lakhs Indian rupees.

                                Melodia Event Management believes in creating magical moments that resonate with your dreams, and our prices reflect that commitment. We provide the best event management in Ahmedabad and each occasion is unique and tailored to your specific requirements, ensuring an unforgettable experience.

                                Contact us to discuss your vision, and we’ll provide you with a customised quote that fits your budget without compromising on the enchantment
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography component="span">What Event Management Services does Melodia Event Management Company provide in Ahmedabad?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Melodia Event Management is a dedicated company for events within Ahmedabad state, India, solely focusing on organizing events for Keralites, Malayalees, and those from outside planning destination weddings in Ahmedabad. We specialize in providing comprehensive event management services across the state, including corporate events, destination weddings, traditional and domestic weddings, entertainment stage shows, inaugurations, exhibitions, trade shows, conferences, virtual and hybrid events, concerts, product launches, religious events, convocation events, private events, logistics coordination for events, marketing & promotion, event venue selection, and many more.

                                Explore More with Us!

                                While you’re here, browse this entire official site of Melodia Event Management to learn about our services and discover the essence of unforgettable events. Find inspiration in our blog posts and web pages to make your event truly memorable in Ahmedabad, India.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography component="span">Do You Arrange Weddings on a Budget?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Yes, we do.

                                Say goodbye to stressful wedding planning and hello to company customised, hassle-free event management services in Ahmedabad. We provide tailored event plans based on our client’s budgets and preferences so that they can have a dream day without breaking the bank.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography component="span">Why Should We Hire an Event Planner/ Event Management Company?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            Let the professionals take the reins when it comes to your special event. company is a leading event management in Ahmedabad that handles every element of your event with absolute detail! We take care of the whole thing and ensure you enjoy the event with your friends and family rather than strain over the planning.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="col-md-6">
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography component="span">How much does event management cost in Ahmedabad?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                The cost of event management services depends on the type of event you are planning to organise in Kerala. The average price range for event management services is from 3 lakhs to 15 lakhs Indian rupees.

                                Melodia Event Management believes in creating magical moments that resonate with your dreams, and our prices reflect that commitment. We provide the best event management in Ahmedabad and each occasion is unique and tailored to your specific requirements, ensuring an unforgettable experience.

                                Contact us to discuss your vision, and we’ll provide you with a customised quote that fits your budget without compromising on the enchantment
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography component="span">What Event Management Services does Melodia Event Management Company provide in Ahmedabad?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Melodia Event Management is a dedicated company for events within Ahmedabad state, India, solely focusing on organizing events for Keralites, Malayalees, and those from outside planning destination weddings in Ahmedabad. We specialize in providing comprehensive event management services across the state, including corporate events, destination weddings, traditional and domestic weddings, entertainment stage shows, inaugurations, exhibitions, trade shows, conferences, virtual and hybrid events, concerts, product launches, religious events, convocation events, private events, logistics coordination for events, marketing & promotion, event venue selection, and many more.

                                Explore More with Us!

                                While you’re here, browse this entire official site of Melodia Event Management to learn about our services and discover the essence of unforgettable events. Find inspiration in our blog posts and web pages to make your event truly memorable in Ahmedabad, India.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography component="span">Do You Arrange Weddings on a Budget?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Yes, we do.

                                Say goodbye to stressful wedding planning and hello to company customised, hassle-free event management services in Ahmedabad. We provide tailored event plans based on our client’s budgets and preferences so that they can have a dream day without breaking the bank.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography component="span">Why Should We Hire an Event Planner/ Event Management Company?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            Let the professionals take the reins when it comes to your special event. company is a leading event management in Ahmedabad that handles every element of your event with absolute detail! We take care of the whole thing and ensure you enjoy the event with your friends and family rather than strain over the planning.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs