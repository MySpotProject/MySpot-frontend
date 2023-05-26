import React, { useState } from "react";
import styles from "./markPopup.module.scss";
import Image from "next/image";

export default function MarkPopup({
    title,
    score,
    descr,
    image,
    street,
    user,
}) {
    const [popupOpen, setPopupOpen] = useState(false);

    return (
        <div className={styles.spot} onClick={() => setPopupOpen(true)}>
            {!popupOpen && (
                <>
                    <h1 className={styles.spot__mark}>{title}</h1>
                </>
            )}
            <p className={styles.spot__score}>{score}</p>
            {popupOpen && (
                <div className={styles.spot__open}>
                    <div className={styles.image}>
                        <Image src={image} alt={`${title}`} fill="cover" />
                    </div>
                    <div className={styles.about}>
                        <div className={styles.about__left}>
                            <h1 className={styles.left__title}>{title}</h1>
                            <div className={styles.left__bottom}>
                                <p>{street}</p>
                                {user && (
                                    <>
                                        <p className={styles.user}>
                                            &nbsp;• <span>@{user}</span>
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className={styles.about__right}>
                            <p>pool</p>
                            <p>ramp</p>
                            <p>ramen</p>
                            <p>sopli</p>
                            <p>sopli</p>
                            <p>sopli</p>
                        </div>
                    </div>
                    {descr && (
                        <>
                            <hr />
                            <p>{descr}</p>
                        </>
                    )}
                    <hr />
                    <div className={styles.comments}>
                        <p>lol</p>
                        <p>lol</p>
                        <p>lol</p>
                    </div>
                    <div className={styles.write_message}></div>
                </div>
            )}
        </div>
    );
}
