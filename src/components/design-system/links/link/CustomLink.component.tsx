import { FC } from 'react';
import Link from 'next/link';

// Styles
import styles from './CustomLink.module.scss';


interface ICustomLink {
    href: string;
    name: string;
    page?: string;
}


const CustomLink: FC<ICustomLink> = ({href, name, page}) =>{
    return (
        <div className={styles.linkWr}>
            <Link href={href} passHref>
                <div className={name === page ? styles.linkNameHighlighted : styles.linkName}>
                    {name}
                </div>
            </Link>
        </div>
    );
}

export default CustomLink;