import Image from 'next/image';
import {FC} from 'react';
import Link from 'next/link'

// Styles
import styles from './HomePage.module.scss';

// Images
// import SVGFacebookIcon from './../../../../public/assets/facebook_icon.svg';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import TemplateBlog from '@/templates/blog/TemplateBlog.component';
import ViewProductsView from '@/components/views/products/ViewProducts.view';



const HomePage: FC = () => {
    return (
            <div className={styles.wr}>
                <div className={styles.imgWrapper}>
                    {/*<Image*/}
                    {/*    src={bandImage}*/}
                    {/*    layout={'responsive'}*/}
                    {/*    className={styles.bandImage}*/}
                    {/*/>*/}

                    <div className={styles.socialMediaBar}>
                        <div className={styles.mediaIcon}>
                            {/*<SVGFacebookIcon />*/}
                            {/*<img src="./../../../../public/assets/facebook_icon.svg" alt="Facebook Icon"/>*/}
                            <YouTubeIcon sx={{ fontSize: 80 }}/>
                            <FacebookIcon sx={{ fontSize: 80 }}/>
                            <InstagramIcon sx={{ fontSize: 80 }}/>
                            <NotStartedIcon sx={{ fontSize: 80 }}/>
                            {/*<svg data-testid="YouTubeIcon"></svg>*/}

                        </div>
                    </div>
                </div>
                <div className={styles.productSection}>
                    <div className={styles.section}>
                        <ViewProductsView />
                    </div>
                    <Link href={'./products'}>
                        <div className={styles.productSectionButton}>
                            Zobacz więcej...
                        </div>
                    </Link>
                </div>
                <div className={styles.postSection}>
                    <div className={styles.section}>
                        <TemplateBlog />
                    </div>
                    <Link href={'./blog'}>
                        <div className={styles.postSectionButton}>
                            Zobacz więcej...
                        </div>
                    </Link>
                </div>

            </div>
    )
}

export default HomePage;
