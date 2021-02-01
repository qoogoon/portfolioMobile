import React from "react"
import { isMobile } from "react-device-detect";
//#region component
import IntroPage from "./Page/IntroPage"
import MobileCareerPage from "./Page/MobileCareerPage"
import WebCareerPage from "./Page/WebCareerPage"
import ContactPage from "./Page/ContactPage"

//#endregion

//#region Swiper.js
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);
//#endregion

interface Props {
    mode: PageMode;
}
export type PageMode = "mobileFirst" | "webFirst" | "mobileOnly" | "webOnly"
export default function Body(props: Props) {
    const { mode } = props;
    let slides: JSX.Element[] = []
    switch (mode) {
        case "mobileFirst":
            slides = [
                <SwiperSlide style={{ height: "100vh", width: "100%" }}><IntroPage /></SwiperSlide>,
                <SwiperSlide style={{ height: "100vh", width: "100%" }}><MobileCareerPage /></SwiperSlide>,
                <SwiperSlide style={{ height: "100vh", width: "100%" }}><WebCareerPage /></SwiperSlide>,
                <SwiperSlide style={{ height: "100vh", width: "100%" }}><ContactPage /></SwiperSlide>,
            ]
            break;
        case "webFirst":
            slides = [
                <SwiperSlide style={{ height: "100vh", width: "100%" }}><IntroPage /></SwiperSlide>,
                <SwiperSlide style={{ height: "100vh", width: "100%" }}><WebCareerPage /></SwiperSlide>,
                <SwiperSlide style={{ height: "100vh", width: "100%" }}><MobileCareerPage /></SwiperSlide>,
                <SwiperSlide style={{ height: "100vh", width: "100%" }}><ContactPage /></SwiperSlide>,
            ]
            break;
        case "webOnly":
            slides = [
                <SwiperSlide style={{ height: "100vh", width: "100%" }}><IntroPage /></SwiperSlide>,
                <SwiperSlide style={{ height: "100vh", width: "100%" }}><WebCareerPage /></SwiperSlide>,
                <SwiperSlide style={{ height: "100vh", width: "100%" }}><ContactPage /></SwiperSlide>,
            ]
            break;
        case "mobileOnly":
            slides = [
                <SwiperSlide style={{ height: "100vh", width: "100%" }}><IntroPage /></SwiperSlide>,
                <SwiperSlide style={{ height: "100vh", width: "100%" }}><MobileCareerPage /></SwiperSlide>,
                <SwiperSlide style={{ height: "100vh", width: "100%" }}><ContactPage /></SwiperSlide>,
            ]
            break;
    }

    return (
        <Swiper
            mousewheel={true}
            pagination={{ clickable: isMobile }}
            navigation={isMobile}
        >
            {slides}
        </Swiper>)
}

