import { FC } from "react";

// Templates
import TemplatePage from "@/components/templates/Layout.template";
import ViewProductsView from '@/components/views/products/ViewProducts.view';
import {QUERY_GET_PRODUCTS} from '@/api/query/QueryGetProducts';
import client from './../../apollo-client'

export interface IProduct {
    description: string;
    id: string;
    images: {
        name: string;
        format: string;
        data: string;
    }[]
    name: string;
    olxLink: string;
}

interface IProductsPage {
    products: IProduct[]
}

const ProductsPage: FC<IProductsPage> = ({products}) => {

    // const { loading, error, data } = useQuery(QUERY_GET_PRODUCTS);
    console.log(products)
    return (
        <TemplatePage page={"Produkty"}>
            <ViewProductsView products={products} />
        </TemplatePage>
    );
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: QUERY_GET_PRODUCTS,
    });
    console.log(data)
    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // // const { loading, error, data } = useQuery(QUERY_GET_PRODUCTS);
    // console.log(data)
    // // const res = await fetch('https://.../posts')
    // const posts = {}

    return {
        props: {
            products: data.getProducts
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

export default ProductsPage;