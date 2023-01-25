import Link from 'next/link';
import { FC } from 'react';

// Styles
import styles from './ButtonLink.module.scss';

interface IButtonLink {
    name: string;
    href: string;
}

const ButtonLink: FC<IButtonLink> = ({name, href}) =>{
    return (
        <Link href={href} passHref>
            <div className={styles.linkWr}>
                {name}
            </div>
        </Link>
        
    );
}

export default ButtonLink;