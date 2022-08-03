import Image from 'next/image';
import {FC} from 'react';

// Styles
import styles from './HomePage.module.scss';

// Images
// import SVGFacebookIcon from './../../../../public/assets/facebook_icon.svg';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import NotStartedIcon from '@mui/icons-material/NotStarted';


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

            </div>
    )
}

export default HomePage;
