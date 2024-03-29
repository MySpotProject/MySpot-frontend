import React from "react";
import styles from "./spacer.module.scss";

const Spacer = ({ size }) => {
    return (
        <>
            <div className={styles[size]} />
        </>
    );
};

export default Spacer;
