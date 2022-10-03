import { FC } from 'react';

// Templates
import {useRouter} from 'next/router';
import CreatePostView from '@/components/views/admin/create-post/CreatePost.view';

const AdminCreatePostPage: FC = () => {
    const router = useRouter();
    const {productId} = router.query;
    return (
        <CreatePostView />
    );
}

export default AdminCreatePostPage;