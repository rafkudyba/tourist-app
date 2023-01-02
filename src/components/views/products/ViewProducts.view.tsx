import { FC } from 'react';
import Link from 'next/link';

// Styles
import styles from './ViewProducts.module.scss'
import ButtonLink from '@/components/design-system/links/link-button/ButtonLink.component';
import {IProduct} from '../../../../pages/products';

export interface Product {
    id?: string;
    name?: string;
    description?:string;
    images: {
        src: string;
        alt: string;
    }[]
    olxLink: string;
}

interface IProductsView {
    products: IProduct[]
}

const ViewProductsView: FC<IProductsView> = ({children, products}) => {



    const dummyProducts = [
        {
            id: 1,
            name: 'Koszulka 610',
            description: 'Lorem ipsum dolor sit amet',
            images: [
                {
                    src: "https://ireland.apollo.olxcdn.com/v1/files/jjbiypgxtwvx1-PL/image;s=1000x700",
                    alt: ""
                },
                {
                    src: "https://ireland.apollo.olxcdn.com/v1/files/co8to7cue9wx-PL/image;s=1000x700",
                    alt: ""
                }
            ],
            olxLink: 'https://www.olx.pl/d/oferta/buldozer-koszulka-610-CID87-IDKBbJC.html'
        },
        {
            id: 2,
            name: 'Koszulka',
            description: 'Lorem ipsum dolor sit amet',
            images: [
                {
                    src: "https://ireland.apollo.olxcdn.com/v1/files/jjbiypgxtwvx1-PL/image;s=1000x700",
                    alt: ""
                },
                {
                    src: "https://ireland.apollo.olxcdn.com/v1/files/co8to7cue9wx-PL/image;s=1000x700",
                    alt: ""
                }
            ],
            olxLink: 'https://www.olx.pl/d/oferta/buldozer-koszulka-610-CID87-IDKBbJC.html'
        },
        {
            id: 3,
            name: 'Koszulka',
            description: 'Lorem ipsum dolor sit amet',
            images: [
                {
                    src: "https://ireland.apollo.olxcdn.com/v1/files/jjbiypgxtwvx1-PL/image;s=1000x700",
                    alt: ""
                },
                {
                    src: "https://ireland.apollo.olxcdn.com/v1/files/co8to7cue9wx-PL/image;s=1000x700",
                    alt: ""
                }
            ],

            olxLink: 'https://www.olx.pl/d/oferta/buldozer-koszulka-610-CID87-IDKBbJC.html'
        },
        {
            id: 4,
            name: 'Koszulka',
            description: 'Lorem ipsum dolor sit amet',
            images: [
                {
                    src: "https://ireland.apollo.olxcdn.com/v1/files/jjbiypgxtwvx1-PL/image;s=1000x700",
                    alt: ""
                },
                {
                    src: "https://ireland.apollo.olxcdn.com/v1/files/co8to7cue9wx-PL/image;s=1000x700",
                    alt: ""
                }
            ],

            olxLink: 'https://www.olx.pl/d/oferta/buldozer-koszulka-610-CID87-IDKBbJC.html'
        }
    ]

    return (
        <div className={styles.productsList}>
            <div className={styles.productListHeader}>
                Nasze produkty
            </div>
            <div className={styles.productListDescription}>
                Tutaj możesz zobaczyć wszystkie dostępne produkty. Jeżeli jesteś zainteresowany ich zakupem zapraszamy na nasz profil na portalu OLX.pl.
            </div>
            <div className={styles.productsWr}>
                {products && products.map((product, index) => (
                    // <Link
                    //             href={`products/${String(product.id)}`}
                    //             key={index}
                    //     >
                    <div key={index} className={styles.productWr}>
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
                                        href={`products/${String(product.id)}`}
                                        key={index}
                                    >
                                        <div
                                            className={styles.button}
                                        >
                                            SZCZEGÓŁY
                                        </div>

                                    </Link>
                                    <a
                                        href={`${product.olxLink}`}
                                        target={'_blank'}
                                        rel="noreferrer"
                                    >
                                        <div
                                            className={styles.button}
                                        >
                                            OLX.PL
                                        </div>
                                    </a>
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

