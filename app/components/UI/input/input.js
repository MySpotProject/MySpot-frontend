import React from "react";
import styles from "./input.module.scss";

export default function Input({ field, ...props }) {
    return (
        <>
            <input {...field} {...props} className={styles.input} />
        </>
    );
}
