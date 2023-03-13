import cn from "classnames";
import React from "react";
import styles from "./defaultButton.module.scss";

const DefaultButton = ({
    children,
    handleClick,
    width,
    type,
    props,
    disabled,
    spinner,
}) => {
    return (
        <>
            <button
                onClick={handleClick}
                disabled={disabled}
                className={cn(styles[type])}
                style={{
                    width,
                    ...props,
                }}
            >
                <svg
                    className={styles[spinner === true && "spinner"]}
                    viewBox="0 0 50 50"
                    style={
                        spinner === true
                            ? { display: "block" }
                            : { display: "none" }
                    }
                >
                    <circle
                        className={styles.path}
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        stroke-width="5"
                    ></circle>
                </svg>
                {children}
            </button>
        </>
    );
};

export default DefaultButton;
