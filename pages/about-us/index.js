import React from "react";
import styles from "./aboutus.module.scss";
import Spacer from "../../components/UI/spacer/spacer";
import images from "../../constants/images";
import Image from "next/image";
import Head from "next/head";

export default function index() {
    const mockData = [
        {
            id: 1,
            title: "GOVNO",
            descr: "ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ",
            date: "14/05/23",
        },
        {
            id: 2,
            title: "GOVNO",
            descr: "ANUS ANUSANUS ANUSANUS ANUSANUS ANUSANUS ANUSANUS ANUSANUS ANUSANUS ANUSANUS ANUSANUS ANUSANUS ANUSANUS ANUSANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ",
            date: "14/05/23",
        },
        {
            id: 3,
            title: "GOVNO",
            descr: "ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ",
            date: "14/05/23",
        },
        {
            id: 4,
            title: "GOVNO",
            descr: "ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ANUS ",
            date: "14/05/23",
        },
    ];
    const developersData = [
        { position: "Frontend", name: "Олег Хех" },
        { position: "Backend", name: "Константин Вернигоров" },
        { position: "Tester", name: "Григорий Харчистов" },
        { position: "Project Manager", name: "Юра Сухенко" },
    ];
    return (
        <>
            <Head></Head>
            <div className="main__height main__wrapper">
                <Spacer size="xl" />
                <section className={styles.aboutUs}>
                    <div className={styles.aboutUs_text}>
                        <h1 className={styles.title}>МЫ КОМАНДА MY SPOT</h1>
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
        </>
    );
}
