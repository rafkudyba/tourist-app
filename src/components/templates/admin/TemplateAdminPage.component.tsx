import { FC } from 'react';
// Styles
import styles from './TemplateAdminPage.module.scss'
import Link from 'next/link';
import LinkButton from '@/components/design-system/links/link-button/LinkButton.component';

const TemplateAdminPage: FC = ({children}) => {

    return (
        <div className={styles.adminWr}>
            <div className={styles.menu}>
                <div className={styles.linkWr}>
                    Admin panel
                    <div className={styles.link}>
                        <LinkButton href={"/admin/edit-posts"} name={"Edytuj posty"}  type={"secondary"} />
                    </div>
                    <div className={styles.link}>
                        <LinkButton href={"/admin/edit-products"} name={"Edytuj produkty"}  type={"secondary"} />
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

export default TemplateAdminPage;
