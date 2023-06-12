import React, { useRef, useState } from "react";
import styles from "./ratings.module.scss";
import Spacer from "../../components/UI/spacer/spacer";
import DefaultButton from "../../components/UI/defaultButton/defaultButton";
import RatingsLayout from "../../layout/RatingsLayout/ratingsLayout";

export default function Index() {
    const [selectedValue, setSelectedValue] = useState("spots");

    const handleButtonClick = (value) => {
        setSelectedValue(value);
    };

    const usersRef = useRef(null);
    const spotsRef = useRef(null);

    const userMockData = [
        {
            id: 1,
            name: "Dmitry",
            nickname: "bobob",
            vk: "https://vk.com/feed",
            score: 13,
            avatar: {
                id: 21,
                url: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
            },
        },
        {
            id: 13,
            name: "lol",
            nickname: "PIDORASIK",
            vk: "https://vk.com/feed",
            tg: "https://t.me/r0sssp",
            score: 28,
            avatar: {
                id: 36,
                url: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
            },
        },
    ];
    const spotMockData = [
        {
            id: 1,
            title: "спот 1",
            description: "descr",
            address: "addressssss",
            rating_avg: 3.0,
            images: [
                {
                    url: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                },
                {
                    url: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                },
            ],
        },
        {
            id: 12,
            title: "спот 12",
            description: "dessqqqscr",
            address: "qqqQQaddressssss",
            rating_avg: 1.0,
            images: [
                {
                    url: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                },
                {
                    url: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                },
            ],
        },
    ];

    return (
        <div className="main__height main__wrapper">
            <Spacer size="xl" />
            <h1>РЕЙТИНГИ —</h1>
            <div className={styles.raiting_layout}>
                <div className={styles.buttons}>
                    <DefaultButton
                        type="staticActive"
                        handleClick={() => handleButtonClick("spots")}
                    >
                        <p
                            style={{
                                opacity: selectedValue === "spots" ? 1 : 0.2,
                                transition: "0.2s all ease-in-out",
                            }}
                        >
                            споты
                        </p>
                    </DefaultButton>
                    <DefaultButton
                        type="staticActive"
                        handleClick={() => handleButtonClick("users")}
                    >
                        <p
                            style={{
                                opacity: selectedValue === "users" ? 1 : 0.2,
                                transition: "0.2s all ease-in-out",
                            }}
                        >
                            пользователи
                        </p>
                    </DefaultButton>
                </div>
                <div className={styles.raiting_container}>
                    {selectedValue === "users" &&
                        userMockData.map((item) => (
                            <div ref={usersRef}>
                                <RatingsLayout
                                    name={item.nickname}
                                    avatar={item.avatar.url}
                                    score={item.score}
                                    socialItems={[item.tg, item.vk]}
                                />
                            </div>
                        ))}
                    {selectedValue === "spots" &&
                        spotMockData.map((item) => (
                            <div ref={spotsRef}>
                                <RatingsLayout
                                    name={item.title}
                                    spotImages={item.images}
                                    rating={item.rating_avg}
                                    address={item.address}
                                />
                            </div>
                        ))}
                </div>
            </div>
            <Spacer size="xl" />
        </div>
    );
}