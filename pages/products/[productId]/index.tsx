import { FC } from "react";

// Templates
import TemplatePage from "@/components/templates/Layout.template";
import TemplatePost from "@/components/templates/post/TemplatePost.template";
import SectionProduct from '@/sections/product/SectionProduct.component';
import {useRouter} from 'next/router';

const SingleProductPage: FC = () => {
    const router = useRouter();
    const {productId} = router.query;
    return (
        <TemplatePage page={`Produkt ${productId}`}>
            <SectionProduct productId={Number(productId)}/>
        </TemplatePage>
    );
}

export default SingleProductPage;