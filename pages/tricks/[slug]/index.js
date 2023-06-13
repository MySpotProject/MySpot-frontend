import styles from "./trick.module.scss";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import Spacer from "../../../components/UI/spacer/spacer";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ShimmerEffect from "../../../components/UI/ShimmerEffect/shimmerEffect";
import Image from "next/image";
import TutorialCard from "../../../components/TutorialCard/tutorialCard";
import useMediaQuery from "../../../Hooks/useMediaQuery";
import { motion } from "framer-motion";
import Slider from "../../../components/Slider/slider";

export default function index({ trick, isLoading, tricks }) {
    const mockCards = [
        {
            src: "https://i.ytimg.com/vi/BwdpuzD3Wcs/maxresdefault.jpg",
        },
        {
            src: "https://i.ytimg.com/vi/BwdpuzD3Wcs/maxresdefault.jpg",
        },
        {
            src: "https://i.ytimg.com/vi/BwdpuzD3Wcs/maxresdefault.jpg",
        },
        {
            src: "https://i.ytimg.com/vi/BwdpuzD3Wcs/maxresdefault.jpg",
        },
    ];
    console.log("tricks", tricks);
    const mob768 = useMediaQuery(768);
    const [isLoadingState, setIsLoadingState] = useState(true);
    useEffect(() => {
        if (isLoading) {
            setIsLoadingState(true);
        } else {
            setIsLoadingState(false);
        }
    }, [isLoading]);

    return (
        <motion.div className={styles.wrapper}>
            <Head>
                <title>
                    {"MY SPOT | как сделать " +
                        trick.title +
                        " | Трюки, Скейт, Споты, места для катания, Скейт-парки, скейт парки"}
                </title>
                <meta
                    name="description"
                    content={
                        trick.title +
                        " | Трюки, Скейт, Споты, места для катания, Скейт-парки, скейт парки"
                    }
                />
                <meta
                    name="keywords"
                    content="скйетборд, трюки, skateboard, tricks, трюки скйет, trick skate, sport, spot, spots, споты, спот, места для катания, Скейт-парки"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta property="og:title" content={"MY SPOT - споты и трюки"} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content={`Как сделать ${trick.title} | Трюки, Скейт, Споты, места для катания, Скейт-парки, скейт парки`}
                />
                {/* <meta
                    property="og:image"
                    content="https://example.com/trick-image.png"
                /> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={"main__height main__wrapper"}>
                <Spacer size={"xl"} />

                <h1 className={styles.title}>{trick.title} —</h1>
                <div className={styles.slider}>
                    <Slider
                        images={mockCards}
                        perView={
                            mockCards?.length === 1
                                ? 1
                                : mockCards?.length === 2
                                ? 2
                                : mob768 && mockCards?.length > 2
                                ? 2
                                : 3
                        }
                    />
                </div>
                {isLoadingState && <ShimmerEffect height={200} />}
                <p className={styles.description}>{trick?.description}</p>
                <Spacer size={"xl"} />
                <h1>ЕЩЁ ТРЮКИ —</h1>
                <div className={styles.anotherTricks}>
                    {tricks.map((item) => (
                        <TutorialCard
                            // image={item?.images}
                            image={mockCards[0].src}
                            title={item?.title}
                            slug={item?.slug}
                        />
                    ))}
                </div>
            </div>
            <Spacer size={"xl"} />
        </motion.div>
    );
}

export async function getServerSideProps({ params }) {
    const trick = await axios
        .get(process.env.NEXT_PUBLIC_API + `/api/tricks/${params.slug}.json`)
        .then((response) => response?.data);
    const tricks = await axios
        .get(process.env.NEXT_PUBLIC_API + `/api/tricks.json`)
        .then((response) => response?.data);

    return {
        props: {
            trick: trick,
            tricks: tricks.slice(0, 3),
            isLoading: false,
        },
    };
}
