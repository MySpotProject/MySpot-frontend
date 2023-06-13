import React from "react";
import Spacer from "../../components/UI/spacer/spacer";
import images from "../../constants/images";
import Image from "next/image";
import Head from "next/head";
import styles from "./aboutus.module.scss";
import { motion } from "framer-motion";

export default function index() {
    const mockData = [
        {
            id: 1,
            title: "NEWS1",
            descr: "newsDescritpion  newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion  ",
            date: "14/05/23",
        },
        {
            id: 2,
            title: "newsTiitle",
            descr: "newsDescritpion  newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion  ",
            date: "14/05/23",
        },
        {
            id: 3,
            title: "newsTiitle",
            descr: "newsDescritpion  newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion  ",
            date: "14/05/23",
        },
        {
            id: 4,
            title: "newsTiitle",
            descr: "newsDescritpion  newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion newsDescritpion  ",
            date: "14/05/23",
        },
    ];
    const developersData = [
        { position: "Frontend", name: "Олег Точеный" },
        { position: "Backend", name: "Константин Вернигоров" },
        { position: "Tester", name: "Григорий Харчистов" },
        { position: "Project Manager", name: "Юра Сухенко" },
    ];

    return (
        <motion.div className={styles.wrapper}>
            <Head></Head>
            <div className="main__height main__wrapper">
                <Spacer size="xl" />
                <section className={styles.aboutUs}>
                    <div className={styles.aboutUs_text}>
                        <h1>МЫ КОМАНДА MY SPOT</h1>
                        <h3>
                            любим печеньки любим печеньки любим печеньки любим
                            печеньки любим печеньки любим печеньки любим
                            печенькилюбим печеньки любим печеньки любим{" "}
                        </h3>
                    </div>
                    <Image src={images.logo} alt="logo" />
                </section>
                <Spacer size="xl" />

                <section className={styles.news_layout}>
                    <h1>НОВОСТИ —</h1>
                    <div className={styles.news_container}>
                        {mockData.map((item) => (
                            <div className={styles.news}>
                                <h1>{item.date}</h1>
                                <h2>{item.title}</h2>
                                <p>{item.descr}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <Spacer size="xl" />
                <section className={styles.developers}>
                    <h1>РАЗРАБОТЧИКИ —</h1>
                    <Spacer size="md" />
                    <div className={styles.developers_layout}>
                        {developersData.map((item) => (
                            <div className={styles.developer_item}>
                                <h1>{item?.position}</h1>
                                <h2>{item?.name}</h2>
                            </div>
                        ))}
                    </div>
                </section>
                <Spacer size="xl" />
            </div>
        </motion.div>
    );
}
