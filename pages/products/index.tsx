import { FC } from "react";

// Templates
import TemplatePage from "@/components/templates/Layout.template";
import ViewProductsView from '@/components/views/products/ViewProducts.view';
import axios from "axios";

export interface IProduct {
    postId?: string;
    name?: string;
    content:string;
    images: {
        src: string;
        alt: string;
    }[];
}

interface IProductsPage {
    data: any & {getProducts: IProduct[]},
}

const ProductsPage: FC<IProductsPage> = ({data}) => {
    return (
        <TemplatePage page={"Produkty"}>
            <ViewProductsView products={data} />
        </TemplatePage>
    );
}

export async function getStaticProps() {
    let data: IProduct[] = [];
    await axios.get('http://localhost:8081/post').then(async (res)=> {
        data = res.data;
    }).catch(() => {

    })

    
    return {
        props: {
            data: data || [],
        },
        revalidate: 10,
    }
}

export default ProductsPage;