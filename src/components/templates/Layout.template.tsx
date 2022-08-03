import {FC} from 'react';

// Components
import Header from '@/components/global/header/Header.component';
import Footer from '@/components/global/footer/Footer.component';

// Styles
import styles from './Layout.module.scss';

interface ITemplatePage {
    page: string;
}

const TemplatePage:FC<ITemplatePage> = ({children, page}) => {
    return (
        <div className={styles.pageWrapper}>
            <Header page={page}/>
                <main className={styles.mainContent}>
                    {children}
                </main>
            <Footer page={page}/>
        </div>
    );
}

export default TemplatePage;