import { FC } from 'react';

// Templates
import {useRouter} from 'next/router';
import TemplateAdminPage from '@/templates/admin/TemplateAdminPage.component';
import TemplatePage from '@/templates/Layout.template';
import ViewEditProductComponent from '@/components/views/admin/edit-product/ViewEditProduct.component';

const AdminEditProductPage: FC = () => {
    const router = useRouter();
    return (
        <TemplatePage page={""}>
            <TemplateAdminPage>
                <ViewEditProductComponent />
            </TemplateAdminPage>
        </TemplatePage>
    );
}

export default AdminEditProductPage;