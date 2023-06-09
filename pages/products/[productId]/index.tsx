import {FC, useEffect, useState} from 'react';

// Templates
import TemplatePage from "@/components/templates/Layout.template";
import SectionProduct from '@/sections/product/SectionProduct.component';
import {useRouter} from 'next/router';
import {IProduct} from '../index';
import axios from 'axios';

const SingleProductPage: FC = () => {
    const router = useRouter();
    const {productId} = router.query;
    const [productData, setProductData] = useState<IProduct>()
    useEffect(() => {
        if (!productId) return;
        axios.get(`http://localhost:8081/post/${productId}`).then((res) => {
            setProductData(res.data);
        })
    }, [productId])

    return (
        <TemplatePage page={`Produkt ${productId}`}>
            <SectionProduct product={productData} productId={Number(productId)}/>
        </TemplatePage>
    );
}

export default SingleProductPage;