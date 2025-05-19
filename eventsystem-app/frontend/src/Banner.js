import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Typography } from '@mui/material';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from "axios";

function Banner () {
  const [record, setRecord] = useState([]);
  const [update, doUpdate] = useState(false);
  
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

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {record.map((records) => (
        <SwiperSlide key={records.id}>
          <Box
            sx={{
            marginTop:'3px',  
            height: '500px',
            background: `url(http://localhost:5000/uploads/${records.image}) center center / cover no-repeat`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
          >
            <Typography variant="h3" color="white">
              {records.imagetext}
            </Typography>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
