import React from "react";
import styles from "./defaultButton.module.scss";

const DefaultButton = ({
    children,
    handleClick,
    width,
    type,
    props,
    disabled,
}) => {
    return (
        <>
            <button
                onClick={handleClick}
                disabled={disabled}
                className={styles[type]}
                style={{
                    width,
                    ...props,
                }}
            >
                {children}
            </button>
        </>
    );
};

export default DefaultButton;
