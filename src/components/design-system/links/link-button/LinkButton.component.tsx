import React from "react";
import Link from "next/link";

// styles
import styles from "./LinkButton.module.scss";

// interface
interface ILinkButton {
    href: string;
    name: string;
    onClick?: (e: any)=>void;
    type?: "primary" | "secondary";
}

const LinkButton: React.FC<ILinkButton> = ({
                                               href,
                                                name,
                                                onClick,
                                               type
                                           }) => {

    let linkButtonClass = `${styles.linkBtn} ${styles.primary}`;
    if (type === "secondary") linkButtonClass = `${styles.linkBtn} ${styles.secondary}`;

    return (
        <Link href={href} >
            <a onClick={onClick} className={linkButtonClass}>
                {name}
            </a>
        </Link>
    );
}

export default LinkButton;