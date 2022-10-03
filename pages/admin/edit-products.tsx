import { FC } from 'react';

// Templates
import {useRouter} from 'next/router';
import CreatePostView from '@/components/views/admin/create-post/CreatePost.view';
import ViewCreateProductComponent from '@/components/views/admin/create-product/ViewCreateProduct.component';
import TemplateAdminPage from '@/templates/admin/TemplateAdminPage.component';
import TemplatePage from '@/templates/Layout.template';

const AdminCreateProductPage: FC = () => {
    const router = useRouter();
    const {productId} = router.query;
    return (
        <TemplatePage page={""}>
            <TemplateAdminPage>
                <ViewCreateProductComponent />
            </TemplateAdminPage>
        </TemplatePage>
    );
}

export default AdminCreateProductPage;