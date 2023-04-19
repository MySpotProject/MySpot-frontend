"use client";
import React from "react";
import styles from "./main.module.scss";
import Image from "next/image";
import images from "constants/images";
import { useRouter } from "next/router";
import useWindowSize from "Hooks/useWindowSize";

export default function HomePage() {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push("/map");
    };
    const [x, setXPos] = React.useState(0);
    const [y, setYPos] = React.useState(0);

    const windowSize = useWindowSize();
    let cX = windowSize.width / 2,
        cY = windowSize.height / 2;

    React.useEffect(() => {
        const handleMouse = (e) => {
            setXPos(e.clientX - cX);
            setYPos(e.clientY - cY);
        };
        window.addEventListener("mousemove", handleMouse);
        return () => {
            window.removeEventListener("mousemove", handleMouse);
        };
    }, []);

    const moveBackX = -x / 50 + "px";
    const moveBackY = -y / 80 + "px";
    const moveCenterX = -x / 30 + "px";
    const moveCenterY = -y / 30 + "px";

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.backGround}
                style={{
                    transform: `translate(${moveBackX}, ${moveBackY})`,
                    transformStyle: "preserve-3d",
                }}
            ></div>
            <div className={styles.main} onClick={handleClick}>
                <Image
                    src={images.logo}
                    alt="Logo"
                    style={{
                        transform: `translate(${moveCenterX}, ${moveCenterY})`,
                        transformStyle: "preserve-3d",
                    }}
                />
            </div>
        </div>
    );
}

// export async function getServerSideProps() {
//     const res = axios.get(process.env.NEXT_PUBLIC_API + "/auth/sign_in");
//     const data = await res?.data;
//     console.log(data);

//     return { props: { data } };
// }
