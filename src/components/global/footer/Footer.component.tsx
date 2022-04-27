import Link from 'next/link';
import { FC } from 'react';

// Styles
import styles from './Footer.module.scss';

interface IFooter {
    page: string;
}

const Footer: FC<IFooter> = () => {

    const date = new Date().getFullYear();

    return (
        <div className={`fx_jc ${styles.footerContainer}`}>
            <div className={styles.content}>
                <div className={`fx_ac fx_jc ${styles.wrapper}`}>
                    <div className={`fx_sa ${styles.linksWr}`}>
                        <Link href="/blog">Blog</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/blog">Blog</Link>
                    </div>
                </div>
                <div className={styles.authorInfo}>
                    Copyright &copy; {date} - Rafał Kudyba, Politechnika Rzeszowska 
                </div>
            </div>
        </div>
    );
}

export default Footer;