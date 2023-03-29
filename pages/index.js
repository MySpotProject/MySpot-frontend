"use client";
import Spacer from "../app/components/UI/spacer/spacer";
import { useRouter } from "next/router";
import Image from "next/image";
import cn from "classnames";
import styles from "./main.module.scss";
import images from "../app/constants/images";

export default function HomePage() {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push("/map");
    };

    return (
        <>
            <div className={styles.wrapper}>
                {/* <div className={styles.left__side}>
                    <Image src={images.railingLeft} alt="railingLeft" />
                </div> */}
                <div className={styles.main} onClick={handleClick}>
                    <Image src={images.logo} alt="Logo" />
                </div>
                <Image className={styles.railings} src={images.railings} />
                {/* <div className={styles.right__side}> */}
                {/* <Image src={images.railingRight} alt="railingRight" /> */}
                {/* </div> */}
            </div>
        </>
    );
}

// export async function getServerSideProps() {
//     const res = axios.get(process.env.NEXT_PUBLIC_API + "/auth/sign_in");
//     const data = await res.data;
//     console.log(data);

//     return { props: { data } };
// }
