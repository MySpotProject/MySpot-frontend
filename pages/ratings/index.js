import styles from "./ratings.module.scss";
import React, { useEffect, useRef, useState } from "react";
import Spacer from "../../components/UI/spacer/spacer";
import DefaultButton from "../../components/UI/defaultButton/defaultButton";
import RatingsLayout from "../../layout/RatingsLayout/ratingsLayout";
import { motion } from "framer-motion";
import cn from "classnames";
import instance from "../../instanceAxios";
import { useRouter } from "next/router";

export default function Index() {
    const router = useRouter();
    const [selectedValue, setSelectedValue] = useState("spots");

    const [users, setUsers] = useState();
    const [spots, setSpots] = useState();
    async function getData() {
        try {
            const resUsers = instance.get("/api/users/top10.json");
            setUsers(resUsers);
        } catch {
            console.log("erroe");
        }
    }
    useEffect(() => {
        getData();
        console.log("getIser", users);
    }, [router]);

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
                url: "https://klike.net/uploads/posts/2022-11/1667980142_030.jpg",
            },
        },
        {
            id: 13,
            name: "lol",
            nickname: "USER",
            vk: "https://vk.com/feed",
            tg: "https://t.me/r0sssp",
            score: 28,
            avatar: {
                id: 36,
                url: "https://klike.net/uploads/posts/2022-11/1667980142_030.jpg",
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
                    url: "https://klike.net/uploads/posts/2022-11/1667980142_030.jpg",
                },
                {
                    url: "https://klike.net/uploads/posts/2022-11/1667980142_030.jpg",
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
                    url: "https://klike.net/uploads/posts/2022-11/1667980142_030.jpg",
                },
                {
                    url: "https://klike.net/uploads/posts/2022-11/1667980142_030.jpg",
                },
            ],
        },
    ];

    return (
        <motion.div
            className={cn("main__height main__wrapper", styles.wrapper)}
        >
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
        </motion.div>
    );
}

// export async function getServerSideProps({ params }) {
//     try {
//         const users = await instance
//             .get("/api/users/top10.json")
//             .then((response) => response?.data);
//         const spots = await instance
//             .get("/api/spots/top10.json")
//             .then((response) => response?.data);

//         return {
//             props: {
//                 data: users,
//             },
//         };
//     } catch (error) {
//         return { redirect: { destination: "/", permanent: false } };
//     }
// }
