import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box } from '@mui/material';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner1 from './images/banner1.jpeg'
import Banner2 from './images/banner2.jpeg'
import Banner3 from './images/banner3.jpeg'

function Destinationwedding() {
    const destinationBanners = [
        { id: 1, image: Banner1, text: 'Banner 1' },
        { id: 2, image: Banner2, text: 'Banner 2' },
        { id: 3, image: Banner3, text: 'Banner 3' },
    ];
    return (
        <div>
            <div>
                <div className="container" style={{ marginTop: '20px' }}>
                    <div className="row" style={{ height: '50vh' }}>
                        {/* Image Column with border radius */}
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-md-6">
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
                                        style={{ borderRadius: '20px' }}
                                    >
                                        {destinationBanners.map((banner) => (
                                            <SwiperSlide key={banner.id}>
                                                <Box
                                                    sx={{
                                                        marginTop: '3px',
                                                        height: '180px',
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
                                        style={{ borderRadius: '20px' }}
                                    >
                                        {destinationBanners.map((banner) => (
                                            <SwiperSlide key={banner.id}>
                                                <Box
                                                    sx={{
                                                        marginTop: '3px',
                                                        height: '180px',
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
                            <div className="row" style={{marginTop:'7px'}}>
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
                                        style={{ borderRadius: '20px' }}
                                    >
                                        {destinationBanners.map((banner) => (
                                            <SwiperSlide key={banner.id}>
                                                <Box
                                                    sx={{
                                                        marginTop: '3px',
                                                        height: '180px',
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
                                        style={{ borderRadius: '20px' }}
                                    >
                                        {destinationBanners.map((banner) => (
                                            <SwiperSlide key={banner.id}>
                                                <Box
                                                    sx={{
                                                        marginTop: '3px',
                                                        height: '180px',
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
                        {/* Content Column with border radius */}
                        <div className="col-lg-5" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0px', borderRadius: '15px' }}>
                            <p>
                                <h3>Unlock Your Dream Destination Wedding in Ahmedabad</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinationwedding;