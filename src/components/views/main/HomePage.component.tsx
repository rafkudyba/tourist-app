import Image from 'next/image';
import {FC, useEffect} from 'react';
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
import {IProduct} from '../../../../pages/products';

interface IHomePage {
    products: IProduct[]
}


const HomePage: FC<IHomePage> = ({products}) => {
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
                          
                            <a href='https://www.youtube.com/'>  <YouTubeIcon/></a>
                            <a href='https://www.facebook.com/'>
                            
                            <FacebookIcon/></a>
                            <InstagramIcon/>
                            <a href='https://instagram.com/'>
                            <NotStartedIcon/></a>
                            {/*<svg data-testid="YouTubeIcon"></svg>*/}

                        </div>
                    </div>
                </div>
                    <div className={styles.bioSection}>
                        - Turystyka to nasza pasja -
                </div>
                
                
                {products.length && <div className={styles.productSection}>
                    <div className={styles.section}>
                        <ViewProductsView products={products} />
                    </div>
                    <Link href={'./products'} passHref>
                        <div className={styles.productSectionButton}>
                            Zobacz więcej...
                        </div>
                    </Link>
                </div>}

            </div>
    )
}

export default HomePage;
