import React from "react";
import Link from "next/link";

// styles
import styles from "./LinkButton.module.scss";

// interface
interface ILinkButton {
    href: string;
    name: string;
    onClick?: (e: any)=>void;
}

const LinkButton: React.FC<ILinkButton> = ({
                                               href,
                                                name,
                                                onClick
                                           }) => {

    let linkButtonClass = `${styles.linkBtn} ${styles.primary}`;

    return (
        <Link href={href} >
            <a onClick={onClick} className={linkButtonClass}>
                {name}
            </a>
        </Link>
    );
}

export default LinkButton;