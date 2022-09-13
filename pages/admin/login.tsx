import { FC } from 'react';

// Templates
import {useRouter} from 'next/router';
import LoginPageView from '@/components/views/admin/login/LoginPage.view';

const AdminLoginPage: FC = () => {
    const router = useRouter();
    const {productId} = router.query;
    return (
        <LoginPageView />
    );
}

export default AdminLoginPage;