import {FC, useEffect, useState} from 'react';

// Templates
import TemplatePage from "@/components/templates/Layout.template";
import TemplatePost from "@/components/templates/post/TemplatePost.template";
import SectionProduct from '@/sections/product/SectionProduct.component';
import {useRouter} from 'next/router';
import client from '../../../apollo-client';
import {QUERY_GET_PRODUCTS} from '@/api/query/QueryGetProducts';
import {useQuery} from '@apollo/client';
import {QUERY_GET_PRODUCT} from '@/api/query/QueryGetProduct';
import {IProduct} from '../index';

const SingleProductPage: FC = () => {
    const router = useRouter();
    const {productId} = router.query;

    const { loading: productLoading, error: productError, data: productRequest } = useQuery(QUERY_GET_PRODUCT, {variables: {id: productId}});
    // console.log(data, loading, error)
    // const productData: IProduct = data.getProduct
    // console.log(productData.getProduct)
    const [productData, setProductData] = useState<IProduct>()
    useEffect(() => {
        if (productRequest !== undefined) {
            const fetchedProduct = productRequest.getProduct;
            setProductData(fetchedProduct)
            // setContact(fetchedContact);
        }
    }, [productRequest]);

    return (
        <TemplatePage page={`Produkt ${productId}`}>
            <SectionProduct product={productData} productId={Number(productId)}/>
        </TemplatePage>
    );
}

// getSta
//
// export async function getServerSideProps() {
//     const { data } = await client.query({
//         query: QUERY_GET_PRODUCTS,
//     });
//     console.log(data)
//     // // eslint-disable-next-line react-hooks/rules-of-hooks
//     // // const { loading, error, data } = useQuery(QUERY_GET_PRODUCTS);
//     // console.log(data)
//     // // const res = await fetch('https://.../posts')
//     // const posts = {}
//
//     return {
//         props: {
//             products: data.getProducts
//         },
//         // Next.js will attempt to re-generate the page:
//         // - When a request comes in
//         // - At most once every 10 seconds
//         revalidate: 10, // In seconds
//     }
// }

export default SingleProductPage;