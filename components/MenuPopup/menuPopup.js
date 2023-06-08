import React, { useState } from "react";
import styles from "./menuPopup.module.scss";
import cn from "classnames";

export default function MenuPopup() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={cn(styles.wrapper, "headerPopup")}>
            <></>
        </div>
    );
}
