import { FC } from 'react';
// Styles
import styles from './TemplateAdminPage.module.scss'
import LinkButton from '@/components/design-system/links/link-button/LinkButton.component';

const TemplateAdminPage: FC = ({children}) => {

    return (
        <div className={styles.adminWr}>
            <div className={styles.menu}>
                <div className={styles.linkWr}>
                    Admin panel
                    <div className={styles.link}>
                        <LinkButton href={"/admin/add-product"} name={"Dodaj post"}  type={"secondary"} />
                        <LinkButton href={"/admin/edit-product"} name={"Edytuj post"}  type={"secondary"} />
                        <LinkButton href={"/admin/delete-product"} name={"Usuń post"}  type={"secondary"} />
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
