import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import images from "../../constants/images.js";
import { useRouter } from "next/router";

export default function Header() {
    const nav = [
        { title: "Map", url: "map", type: "link" },
        { title: "Tutorials", url: "tutorials", type: "link" },
        { title: "About Us", url: "about", type: "link" },
    ];
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push("/");
    };

    return (
        <header className={styles.header}>
            <div className={`main__wrapper ${styles.header__items}`}>
                <div className={styles.header__logo}>
                    <a onClick={handleClick}>
                        <Image src={images.logo} alt={"logo"} />
                    </a>
                </div>
                <ul>
                    {nav.map((item) => (
                        <li key={item.title}>
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push(`${item.url}`);
                                }}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={styles.header__menu}>
                    <Image src={images.menu} alt={"menu"} />
                </div>
            </div>
        </header>
    );
}
