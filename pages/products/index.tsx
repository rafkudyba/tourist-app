import { FC } from "react";

// Templates
import TemplatePage from "@/components/templates/Layout.template";
import ViewProductsView from '@/components/views/products/ViewProducts.view';
import {QUERY_GET_PRODUCTS} from '@/api/query/QueryGetProducts';
import client from './../../apollo-client'

export interface IProduct {
    id?: string;
    name?: string;
    description:string;
    images: {
        src: string;
        alt: string;
    }[]
    olxLink: string;
}

interface IProductsPage {
    data: any & {getProducts: IProduct[]},
}

const ProductsPage: FC<IProductsPage> = ({data}) => {
    return (
        <TemplatePage page={"Produkty"}>
            <ViewProductsView products={data.getProducts} />
        </TemplatePage>
    );
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: QUERY_GET_PRODUCTS,
    });

    return {
        props: {
            data: data || []
        },
        revalidate: 10,
    }
}

export default ProductsPage;