import { FC } from 'react';

// Templates
import {useRouter} from 'next/router';
import LoginPageView from '@/components/views/admin/login/LoginPage.view';
import TemplateAdminPage from '@/templates/admin/TemplateAdminPage.component';
import TemplatePage from '@/templates/Layout.template';

const AdminPage: FC = () => {
    const router = useRouter();
    const {productId} = router.query;
    return (

        <TemplatePage page={""}>
            <TemplateAdminPage>
                asd
            </TemplateAdminPage>
        </TemplatePage>
    );
}

export default AdminPage;