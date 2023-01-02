// Internal packages
import { FC, useRef, useState } from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Navigation, Thumbs  } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Templates
import TemplatePage from "@/components/templates/Layout.template";
import TemplatePost from "@/components/templates/post/TemplatePost.template";

// Styles
import styles from './SectionProduct.module.scss';
import {IProduct} from '../../../../pages/products';

interface ISectionProduct {
    product?: IProduct
    productId: number
}

const dummyProductsList = [
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
    }
]



const SectionProduct: FC<ISectionProduct> = ({product, productId}) => {
    const dummyProduct = dummyProductsList.find((product) => {
        return product.id === productId;
    })
    console.log(product)
    return (
        <>
            {product &&
                <div className={styles.productWr}>
                    <div className={styles.productSwipperWr}>
                        <Swiper
                            pagination={true}
                            modules={[Pagination, Navigation]}
                            navigation={true}
                            className="mySwiper"
                        >
                            {product.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className={styles.productImg}
                                        style={{
                                            backgroundImage: `url(${image.src})`
                                        }}
                                    />
                                </SwiperSlide>)
                            )}
                        </Swiper>
                    </div>

                    <div className={styles.productName}>
                        {product.name}
                    </div>
                    <div
                        className={styles.productDescription}
                        dangerouslySetInnerHTML={{__html: product.description}}
                    />
                    <div className={styles.buttonWr}>
                        <a
                            href={`${product.olxLink}`}
                            target={"_blank"}
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
            }
</>

    );
}

export default SectionProduct;