import Link from 'next/link';
import { FC } from 'react';

// Components
import CustomLink from '@/components/design-system/links/link/CustomLink.component';


// Styles
import styles from './Header.module.scss';
import Image from 'next/image';

// Images
import bandLogo from '../../../../public/band_logo_main.jpg';

interface IHeader {
    page: string;
}

const Header: FC<IHeader> = ({page}) => {
    return (
        <div className={`fx_jc ${styles.headerContainer}`}>
            <div className={`fx_ac fx_sb ${styles.content}`}>
            <div className={`fx_ac ${styles.leftContent}`}>
                <Link href={'/'}>
                    <Image
                        src={bandLogo}
                        // layout={'intrinsic'}
                        // width={300}
                        // height={60}
                        className={styles.logo}
                        />
                </Link>
            </div>
            <div className={`fx_ac ${styles.rightContent}`}>
                <div className={`fx_sa ${styles.linksWr}`}>
                    <CustomLink href='/blog' name={"Blog"} page={page}/>
                    <CustomLink href='/products' name={"Produkty"} page={page}/>
                    <CustomLink href='/blog' name={"Section"} page={page}/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Header;