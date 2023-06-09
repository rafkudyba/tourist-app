// Internal packages
import { FC, useRef, useState } from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Navigation, Thumbs  } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Styles
import styles from './SectionProduct.module.scss';
import {IProduct} from '../../../../pages/products';

interface ISectionProduct {
    product?: IProduct
    productId: number
}


const SectionProduct: FC<ISectionProduct> = ({product, productId}) => {
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
                            {product.images && product.images.map((image, index) => (
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
                        dangerouslySetInnerHTML={{__html: product.content}}
                    />

                </div>
            }
</>

    );
}

export default SectionProduct;