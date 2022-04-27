
import CustomLink from '@/components/design-system/link/CustomLink.component';
import Link from 'next/link';
import { FC } from 'react';

// Styles
import styles from './Header.module.scss';

interface IHeader {
    page: string;
}

const Header: FC<IHeader> = ({page}) => {
    return (
        <div className={`fx_jc ${styles.headerContainer}`}>
            <div className={`fx_ac fx_sb ${styles.content}`}>
            <div className={`fx_ac ${styles.leftContent}`}>
                <div className={styles.logo}>
                    BULDOŻER
                </div>
            </div>
            <div className={`fx_ac ${styles.rightContent}`}>
                <div className={`fx_sa ${styles.linksWr}`}>
                    <CustomLink href='/blog' name={"Blog"} page={page}/>
                    <CustomLink href='/blog' name={"Produkty"} page={page}/>
                    <CustomLink href='/blog' name={"Section"} page={page}/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Header;