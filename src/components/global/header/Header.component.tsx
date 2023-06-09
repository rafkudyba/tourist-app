import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

// Components
import CustomLink from '@/components/design-system/links/link/CustomLink.component';

// Styles
import styles from './Header.module.scss';

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
                    <Link href={'/'} passHref>
                        <Image
                            src={bandLogo}
                            alt={''}
                            // layout={'intrinsic'}
                            // width={300}
                            // height={60}
                            className={styles.logo}
                            />
                    </Link>
                </div>
                <div className={`fx_ac ${styles.rightContent}`}>
                    <div className={`fx_sa ${styles.linksWr}`}>
                        {/*<CustomLink href='/login' name={"Zaloguj"} page={page}/>*/}
                        <CustomLink href='/' name={"Strona główna"} page={page}/>
                        <CustomLink href='/products' name={"Posty"} page={page}/>
                        {/*<CustomLink href='/blog' name={"Section"} page={page}/>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;