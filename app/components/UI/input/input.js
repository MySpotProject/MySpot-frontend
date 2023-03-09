import cn from "classnames";
import React from "react";
import styles from "./input.module.scss";

export default function Input({ errors, ...props }) {
    return (
        <>
            <input {...props} className={cn(styles.input, styles[errors])} />
        </>
    );
}
