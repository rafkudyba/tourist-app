import { FC } from "react";

// Templates
import TemplatePage from "@/components/templates/Layout.template";
import TemplateBlog from '@/templates/blog/TemplateBlog.component';
import ViewProductsView from '@/components/views/products/ViewProducts.view';

const ProductsPage: FC = () => {
    return (
        <TemplatePage page={"Produkty"}>
            <ViewProductsView />
        </TemplatePage>
    );
}

export default ProductsPage;