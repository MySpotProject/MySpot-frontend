"use server";
import React, { useEffect, useState } from "react";
import styles from "./headerMenu.module.scss";
import cn from "classnames";
import Image from "next/image";
import DefaultButton from "../UI/defaultButton/defaultButton";
import { useRouter } from "next/router";
import images from "../../constants/images";
import Input from "../UI/Input/input";
import axios from "axios";

export default function HeaderMenu() {
    const router = useRouter();
    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        router.push("/login");
    };

    const [isAuthorization, setIsAuthorization] = useState(false);
    const [noAuthLoader, setNoAuthLoader] = useState(true);
    const [userData, setUserData] = useState({
        nickname: "User",
        name: "Name",
        avatar: "",
        email: "",
    });
    const [imageFiles, setImageFiles] = useState([]);

    async function fetchUserProfile() {
        try {
            const response = await axios.get("/api/axiosMiddleware/getUser");
            console.log("auth", response);
            const data = response.data.data;
            setIsAuthorization(true);
            setNoAuthLoader(false);
            setUserData({ nickname: data.nickname });
        } catch (error) {
            setNoAuthLoader(false);
            console.log("errorLOL", error.response.data);
        }
    }
    useEffect(() => {
        fetchUserProfile();
    }, []);

    const socialItems = [
        { image: images.tg, url: "https://vk.com", type: "link" },
        { image: images.vk, url: "https://vk.com", type: "link" },
        { image: images.email, url: "https://vk.com", type: "link" },
    ];
    return (
        <div
            className={cn(
                styles.wrapper,
                styles[!isAuthorization && "no_auth"]
            )}
        >
            <div className={cn("main__wrapper", styles.container)}>
                {noAuthLoader ? (
                    ""
                ) : (
                    <>
                        {!isAuthorization && (
                            <div className={styles.no_auth__content}>
                                <h2>
                                    Для доступа к редактированию профиля,
                                    просмотра фигур на споте, его описание,
                                    рейтинга и комментариев, необходимо
                                    авторизоваться
                                </h2>
                                <DefaultButton
                                    handleClick={handleClick}
                                    type={"default"}
                                >
                                    <p>войти</p>
                                </DefaultButton>
                            </div>
                        )}
                    </>
                )}
                <div className={styles.user_container}>
                    <div className={styles.user_profile}>
                        <label className={styles.image}>
                            <input
                                id="files"
                                type="file"
                                name="images"
                                accept="image/png, image/gif, image/jpeg"
                                onChange={(event) => {
                                    const fileList = event.target.files;
                                    Promise.all(
                                        Array.from(fileList).map((file) => {
                                            return new Promise((resolve) => {
                                                const reader = new FileReader();
                                                reader.readAsDataURL(file);
                                                reader.onload = () =>
                                                    resolve(reader.result);
                                            });
                                        })
                                    ).then((images) => {
                                        // setFieldValue("images", images);
                                        setImageFiles(images);
                                    });
                                }}
                            />
                            <Image fill="cover" src={imageFiles[0]} />
                        </label>
                        <div className={styles.nickName}>
                            <input
                                value={userData.nickname}
                                className={styles.user_nickName}
                            />
                            <ul className={styles.socials}>
                                {socialItems.map((item, i) => (
                                    <li key={i}>
                                        <a>
                                            <Image
                                                src={item.image}
                                                alt={item.url}
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.pts}>
                            <p>0 PTS</p>
                        </div>
                    </div>
                    <div className={styles.user_other}>
                        <Input type="mail" placeholder={"Смена почты"} />
                        <Input type="password" placeholder={"Смена пароля"} />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <h1>Принять</h1>
                    <h1 className={styles.active}>Выйти</h1>
                </div>
            </div>
        </div>
    );
}
