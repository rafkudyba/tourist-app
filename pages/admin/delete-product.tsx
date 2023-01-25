import { FC } from 'react';

// Templates
import {useRouter} from 'next/router';
import TemplateAdminPage from '@/templates/admin/TemplateAdminPage.component';
import TemplatePage from '@/templates/Layout.template';
import ViewEditProductComponent from '@/components/views/admin/edit-product/ViewEditProduct.component';
import ViewDeleteProductComponent from '@/components/views/admin/delete-product/ViewDeleteProduct.component';

const AdminDeleteProductPage: FC = () => {
    const router = useRouter();
    return (
        <TemplatePage page={""}>
            <TemplateAdminPage>
                <ViewDeleteProductComponent />
            </TemplateAdminPage>
        </TemplatePage>
    );
}

export default AdminDeleteProductPage;