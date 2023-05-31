import React, { useState } from "react";
import styles from "./markPopup.module.scss";
import cn from "classnames";
import Image from "next/image";
import like from "../../assets/images/like.svg";
import dislike from "../../assets/images/dislike.svg";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function MarkPopup({
    title,
    score,
    descr,
    image,
    street,
    user,
    user_image,
    comments,
    figures,
}) {
    const [popupOpen, setPopupOpen] = useState(false);
    console.log(image[0].url);
    return (
        <div className={styles.spot} onClick={() => setPopupOpen(true)}>
            {!popupOpen && (
                <>
                    <h1 className={styles.spot__mark}>{title}</h1>
                </>
            )}
            <div className={styles.spot__aside}>
                {popupOpen && (
                    <p
                        className={styles.spot__close}
                        onClick={(e) => {
                            e.stopPropagation();
                            setPopupOpen(false);
                        }}
                    >
                        X
                    </p>
                )}
                <p className={styles.spot__score}>{score}</p>
            </div>
            {popupOpen && (
                <div className={styles.spot__open}>
                    <Swiper
                        className={styles.image}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                    >
                        {image?.map((item, i) => (
                            <SwiperSlide>
                                <Image
                                    src={item[i]?.src}
                                    alt={`${title}`}
                                    fill="cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={styles.about}>
                        <div className={styles.about__left}>
                            <h1 className={styles.left__title}>{title}</h1>
                            <div className={styles.left__bottom}>
                                <p>{street} •</p>
                                {user && (
                                    <>
                                        &nbsp;
                                        <div
                                            className={cn(
                                                styles.user__image,
                                                styles.user__image_small
                                            )}
                                        >
                                            <Image
                                                src={user_image}
                                                alt={user}
                                                fill="cover"
                                            />
                                        </div>
                                        &nbsp;
                                        <p className={styles.user}>{user}</p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className={styles.about__right}>
                            {figures.map((item, index) => (
                                <>
                                    {Object.entries(item).map(
                                        ([key, value]) => (
                                            <p
                                                className={
                                                    styles[!value && "active"]
                                                }
                                            >
                                                {key}
                                            </p>
                                        )
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                    {descr && (
                        <>
                            <hr />
                            <p className={styles.descr}>{descr}</p>
                        </>
                    )}
                    <hr />
                    <div className={styles.comments}>
                        {comments?.map((item) => (
                            <>
                                <div className={styles.comments__item}>
                                    <div className={styles.user}>
                                        <div className={styles.user__image}>
                                            <Image
                                                src={item?.user_image}
                                                alt={item?.user}
                                                fill="cover"
                                            />
                                        </div>
                                        <p>&nbsp;{item?.user} •&nbsp;</p>
                                        <Image
                                            className={"svg"}
                                            src={item?.score ? like : dislike}
                                            alt={item?.user}
                                            width={
                                                item?.score === true ? 20 : 24
                                            }
                                        />
                                        <p>&nbsp;•&nbsp;</p>
                                        <p className={styles.date}>14.05.23</p>
                                    </div>
                                    <p className={styles.message}>
                                        {item?.message}
                                    </p>
                                    <hr style={{ opacity: "0.4" }} />
                                </div>
                            </>
                        ))}
                    </div>
                    <div className={styles.write_message}></div>
                </div>
            )}
        </div>
    );
}
