import React from "react";
import styles from "./ratingsLayout.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import images from "../../constants/images";
import cn from "classnames";
import ShimmerEffect from "../../components/UI/ShimmerEffect/shimmerEffect";

export default function RatingsLayout({
    spotImages,
    avatar,
    name,
    socialItems,
    score,
    rating,
    address,
}) {
    const exapmleSocialItems = [
        {
            id: 1,
            name: "tg",
            image: images.tg,
            url: socialItems && socialItems[0],
        },
        {
            id: 2,
            name: "vk",
            image: images.vk,
            url: socialItems && socialItems[1],
        },
        // { image: images.email, url: "https://vk.com", type: "link" },
    ];
    console.log(spotImages);
    return (
        <div className={styles.wrapper}>
            {avatar && (
                <div className={cn(styles.image, styles.slider)}>
                    <Image fill="cover" src={avatar} />
                </div>
            )}
            {spotImages && (
                <div className={cn(styles.image, styles.slider)}>
                    <Swiper
                        className={cn(styles.image, styles.slider)}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                    >
                        {/* {isLoadingState && (
                        <SwiperSlide>
                            <ShimmerEffect height={400} />
                        </SwiperSlide>
                    )} */}
                        {spotImages?.map((item, i) => (
                            <SwiperSlide>
                                <Image
                                    src={item.url}
                                    alt={`${name}`}
                                    fill="cover"
                                    placeholder={<ShimmerEffect />}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
            <div className={styles.middle}>
                <div className={styles.spotUserName}>
                    <h1 className={styles.name}>{name}</h1>
                </div>
                {address && <p>{address}</p>}
                {score && (
                    <ul className={styles.socials}>
                        {exapmleSocialItems.map((item, i) => (
                            <>
                                {item.url && (
                                    <li key={i}>
                                        <a
                                            target="_blank"
                                            href={item.url}
                                            className={styles.socials_icons}
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.url}
                                            />
                                        </a>
                                    </li>
                                )}
                            </>
                        ))}
                    </ul>
                )}
            </div>
            {rating && (
                <div className={styles.score}>
                    <p>Рейтинг : {rating}</p>
                </div>
            )}
            {score && (
                <div className={styles.score}>
                    <p>{score} PTS</p>
                </div>
            )}
        </div>
    );
}
