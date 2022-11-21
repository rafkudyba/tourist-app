import React from "react";
import Link from "next/link";

// styles
import styles from "./ButtonSubmit.module.scss";

// interface
interface IButtonSubmit {
    name: string;
    onClick?: (e: any)=>void;
    type?: "primary" | "secondary";
}

const ButtonSubmit: React.FC<IButtonSubmit> = ({
                                               name,
                                               onClick,
                                               type
                                           }) => {

    let linkButtonClass = `${styles.linkBtn} ${styles.primary}`;
    if (type === "secondary") linkButtonClass = `${styles.linkBtn} ${styles.secondary}`;

    return (
            <button onClick={onClick} className={linkButtonClass}>
                {name}
            </button>
    );
}

export default ButtonSubmit;