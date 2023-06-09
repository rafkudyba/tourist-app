import { FC,useEffect } from 'react';
import Link from 'next/link';

// Styles
import styles from './ViewProducts.module.scss'
import ButtonLink from '@/components/design-system/links/link-button/ButtonLink.component';
import {IProduct} from '../../../../pages/products';
import { useRouter } from 'next/router';

export interface Product {
    postId?: string;
    name?: string;
    content?:string;
    images: {
        src: string;
        alt: string;
    }[];
}

interface IProductsView {
    products: IProduct[]
}

const ViewProductsView: FC<IProductsView> = ({children, products}) => {

    const router = useRouter()

    useEffect(() => {console.log(products)}, [])

    



    return (
        <div className={styles.productsList}>
            <div className={styles.productListHeader}>
                POSTY
            </div>
            <div className={styles.productListDescription}>
                Tutaj możesz zobaczyć wszystkie dostępne posty.
            </div>
            <div className={styles.productsWr}>
                {products && products.map((product, index) => (
                    <div key={index} className={styles.productWr} onClick={() => router.push(`products/${String(product.postId)}`)}>
                        {product.images[0]?.src
                        ?
                            <div
                                className={styles.product}
                                style={{
                                    backgroundImage: `url(${product.images[0].src})`,
                                    //     // height: '100px'
                                }}
                            >
                                <div className={styles.buttonWr}>
                                    <div className={styles.productName}>
                                        {product.name}
                                    </div>
                                    <Link
                                        href={`products/${String(product.postId)}`}
                                        key={index}
                                        passHref
                                    >
                                        <div
                                            className={styles.button}
                                        >
                                            ZOBACZ
                                        </div>

                                    </Link>
                                </div>
                            </div>
                        : null}

                    </div>
                    // </Link>
                ))}

            </div>
        </div>


    );
}

export default ViewProductsView;

