import styles from "./markPopup.module.scss";
import React, { useEffect, useState } from "react";
import cn from "classnames";
import Image from "next/image";
import like from "../../assets/images/like.svg";
import dislike from "../../assets/images/dislike.svg";
import { getCookie } from "cookies-next";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
import DefaultButton from "../UI/defaultButton/defaultButton";
import { useRouter } from "next/router";
import ShimmerEffect from "../UI/ShimmerEffect/shimmerEffect";
import SendComment from "../SendComment/sendComment";
import Slider from "../Slider/slider";

export default function MarkPopup({ id, title, score }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [selectedSpot, setSelectedSpot] = useState(null);
    const [cookieState, setCookieState] = useState(false);
    const handleSpotClick = async (id) => {
        const cookie = getCookie("myspot_jwt2222");
        cookie?.length === 0 || cookie === undefined
            ? setCookieState(false)
            : setCookieState(true);
        const response = await axios.get(
            process.env.NEXT_PUBLIC_API + `/api/spot/${id}.json`
        );
        setSelectedSpot(response.data);
        setIsLoading(false);
    };
    const [popupOpen, setPopupOpen] = useState(false);
    const [figure, setFigure] = useState([
        { name: "pool", value: "" },
        { name: "ramp", value: "" },
        { name: "rail", value: "" },
        { name: "ladder", value: "" },
        { name: "slide_elements", value: "" },
    ]);
    useEffect(() => {
        setFigure([
            { name: "pool", value: selectedSpot?.pools },
            { name: "ramp", value: selectedSpot?.ramps },
            { name: "rail", value: selectedSpot?.rail },
            { name: "ladder", value: selectedSpot?.ladder },
            { name: "slide_elements", value: selectedSpot?.slide },
        ]);
    }, [selectedSpot]);

    console.log(selectedSpot);
    return (
        <div
            id={id}
            className={styles.spot}
            onClick={() => {
                setPopupOpen(true);
                handleSpotClick(id);
            }}
        >
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
                    <div className={styles.image}>
                        <Slider
                            isLoading={isLoading}
                            spot={true}
                            images={selectedSpot?.images}
                            perView={1}
                            id={id}
                        />
                    </div>
                    <div className={styles.about}>
                        <div className={styles.about__left}>
                            <h1 className={styles.left__title}>{title}</h1>
                            <div className={styles.left__bottom}>
                                {isLoading ? (
                                    <ShimmerEffect height={18} />
                                ) : (
                                    false
                                )}

                                <p>{selectedSpot?.address}</p>
                                {selectedSpot?.author &&
                                    selectedSpot?.author?.avatar?.url && (
                                        <>
                                            <p>&nbsp; • &nbsp;</p>
                                            <div
                                                className={cn(
                                                    styles.user__image,
                                                    styles.user__image_small
                                                )}
                                            >
                                                <Image
                                                    src={
                                                        selectedSpot?.author
                                                            ?.avatar?.url
                                                    }
                                                    alt={
                                                        selectedSpot?.author
                                                            ?.nickname
                                                    }
                                                    fill="cover"
                                                />
                                            </div>
                                            &nbsp;
                                            {/* <p className={styles.user}>
                                            {selectedSpot?.author?.nickname}
                                        </p> */}
                                        </>
                                    )}
                            </div>
                        </div>
                        <div className={styles.about__right}>
                            {!cookieState ? (
                                ""
                            ) : (
                                <>
                                    {isLoading ? (
                                        <ShimmerEffect height={60} />
                                    ) : (
                                        <>
                                            {figure.map((item) => (
                                                <p
                                                    className={
                                                        styles[
                                                            !item?.value &&
                                                                "active"
                                                        ]
                                                    }
                                                >
                                                    {item.name}
                                                </p>
                                            ))}
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                    {!cookieState ? (
                        <div className={styles.unlogin}>
                            <div className={styles.unlogin_message}>
                                <p>
                                    для просмотра наличия фигр, комментариев и
                                    описания требуется авторизация
                                </p>
                                <DefaultButton
                                    handleClick={() => {
                                        router.push("/login");
                                    }}
                                    type={"default"}
                                >
                                    <p>войти</p>
                                </DefaultButton>
                            </div>
                            <div className={styles.blur}></div>
                        </div>
                    ) : (
                        <>
                            {isLoading && <ShimmerEffect height={20} />}
                            {selectedSpot?.description && (
                                <>
                                    <hr />
                                    <p className={styles.descr}>
                                        {selectedSpot?.description}
                                    </p>
                                </>
                            )}
                            <hr />
                            <div className={styles.comments}>
                                {/* {isLoading && <ShimmerEffect height={80} />} */}
                                {selectedSpot?.comments?.map((item) => (
                                    <>
                                        <div
                                            key={item?.id}
                                            className={styles.comments__item}
                                        >
                                            <div className={styles.user}>
                                                <div
                                                    className={
                                                        styles.user__image
                                                    }
                                                >
                                                    <Image
                                                        src={item?.avatar}
                                                        alt={item?.nickname}
                                                        fill="cover"
                                                        placeholder="empty"
                                                    />
                                                </div>
                                                <p>
                                                    &nbsp;{item?.nickname}{" "}
                                                    •&nbsp;
                                                </p>
                                                {/* <Image
                                            className={"svg"}
                                            src={item?.score ? like : dislike}
                                            alt={item?.user}
                                            width={
                                                item?.score === true ? 20 : 24
                                            }
                                        /> */}
                                                <p>&nbsp;•&nbsp;</p>
                                                <p className={styles.date}>
                                                    14.05.23
                                                </p>
                                            </div>
                                            <p className={styles.message}>
                                                {item?.content}
                                            </p>
                                            <hr style={{ opacity: "0.4" }} />
                                        </div>
                                    </>
                                ))}
                            </div>
                            <SendComment id={id} />
                            {/* <div className={styles.write_message}>
                                <input value={"Привет ну и говно"} />
                                <button>
                                    <p>{">"}</p>
                                </button>
                            </div> */}
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
