import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Button } from '@mui/material';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner1 from './images/banner1.jpeg'
import Banner2 from './images/banner2.jpeg'
import Banner3 from './images/banner3.jpeg'
import Venue from './images/venue.png'

function Perfectvenue() {
    const destinationBanners = [
        { id: 1, image: Banner1, text: 'Banner 1' },
        { id: 2, image: Banner2, text: 'Banner 2' },
        { id: 3, image: Banner3, text: 'Banner 3' },
    ];
    return (
        <div>
            <div className="container" style={{ backgroundColor: '#674188', padding: '20px', marginTop: '20px', borderRadius: '15px',  backgroundImage: `url(${Venue})`, backgroundSize:'15% auto', backgroundRepeat:'no-repeat',backgroundPosition:'bottom right'}}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6" >
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{ clickable: true }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                    style={{ borderRadius: '12px' }}
                                >
                                    {destinationBanners.map((banner) => (
                                        <SwiperSlide key={banner.id}>
                                            <Box
                                                sx={{
                                                    marginTop: '3px',
                                                    height: '130px',
                                                    background: `url(${banner.image}) center center / cover no-repeat`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {/* <Typography variant="h3" color="white">
                                                                                {banner.text}
                                                                            </Typography> */}
                                            </Box>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="col-md-6">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{ clickable: true }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                    style={{ borderRadius: '12px' }}
                                >
                                    {destinationBanners.map((banner) => (
                                        <SwiperSlide key={banner.id}>
                                            <Box
                                                sx={{
                                                    marginTop: '3px',
                                                    height: '130px',
                                                    background: `url(${banner.image}) center center / cover no-repeat`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {/* <Typography variant="h3" color="white">
                                                                                {banner.text}
                                                                            </Typography> */}
                                            </Box>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '7px' }}>
                            <div className="col-md-6">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 6000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{ clickable: true }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                    style={{ borderRadius: '12px' }}
                                >
                                    {destinationBanners.map((banner) => (
                                        <SwiperSlide key={banner.id}>
                                            <Box
                                                sx={{
                                                    marginTop: '3px',
                                                    height: '130px',
                                                    background: `url(${banner.image}) center center / cover no-repeat`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                              
                                                }}
                                            >
                                                {/* <Typography variant="h3" color="white">
                                                                                {banner.text}
                                                                            </Typography> */}
                                            </Box>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="col-md-6">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 7000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{ clickable: true }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                    style={{ borderRadius: '12px' }}
                                >
                                    {destinationBanners.map((banner) => (
                                        <SwiperSlide key={banner.id}>
                                            <Box
                                                sx={{
                                                    marginTop: '3px',
                                                    height: '130px',
                                                    background: `url(${banner.image}) center center / cover no-repeat`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {/* <Typography variant="h3" color="white">
                                                                                {banner.text}
                                                                            </Typography> */}
                                            </Box>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8" style={{ marginTop: '90px', color: "white" }}>
                        <h2>Struggling to find the perfect venue?</h2>
                        <p>Find your perfect venue hassle-free with Melodia. <br />Easy booking, endless choices.</p>
                        <Button variant="contained" style={{ backgroundColor: '#c8a1e0', color: 'white', marginTop: '10px', borderRadius:'50px', fontSize:'18px' }}>
                            Explore Venue
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfectvenue;
