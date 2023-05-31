import React from "react";
import Image from "next/image";
import images from "../../constants/images.js";
import styles from "./header.module.scss";
import Link from "next/link.js";

export default function Header() {
    const nav = [
        { title: "Карта", url: "/map" },
        { title: "Трюки", url: "/tricks" },
        { title: "О нас", url: "/about" },
    ];

    return (
        <header className={styles.header}>
            <div className={`main__wrapper ${styles.header__items}`}>
                <div className={styles.header__logo}>
                    <Link href={"/"}>
                        <Image src={images.logo} alt={"logo"} />
                    </Link>
                </div>
                <ul>
                    {nav.map((item) => (
                        <li key={item.title}>
                            <Link href={item.url}>
                                <p>{item.title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={styles.header__wrapper}>
                    <div className={styles.burger}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
}
