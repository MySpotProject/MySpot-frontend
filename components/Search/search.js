import React from "react";
import styles from "./search.module.scss";
import Input from "../UI/Input/input";
import Link from "next/link";
import Image from "next/image";

export default function Search({ data }) {
    const [value, setValue] = React.useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className={styles.wrapper}>
            <Input placeholder="Search" value={value} onChange={onChange} />
            <div className={styles.dropDown}>
                {data
                    ?.filter((item) => {
                        const searchTerm = value.toLowerCase();
                        const title = item?.title.toLowerCase();

                        return searchTerm && title.startsWith(searchTerm);
                    })
                    ?.slice(0, 6)
                    ?.map((item) => (
                        <Link
                            className={styles.dropDown_row}
                            href={"tricks/" + item.slug}
                        >
                            <div className={styles.dropDown_container}>
                                <Image src={item.image} fill="cover" />
                                <p className={styles.lol}>{item?.title}</p>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}
