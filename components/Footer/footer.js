import React from "react";
import styles from "./footer.module.scss";
import images from "../../constants/images";
import Image from "next/image";

const item = [
    { image: images.tg, url: "https://vk.com", type: "link" },
    { image: images.vk, url: "https://vk.com", type: "link" },
    { image: images.email, url: "https://vk.com", type: "link" },
];

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <ul>
                {item.map((item, index) => (
                    <li key={index}>
                        <a href={item.url} target="_blank">
                            <Image src={item.image} alt={`${item.image}`} />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
