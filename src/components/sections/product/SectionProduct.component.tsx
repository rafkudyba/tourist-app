import { FC } from "react";

// Templates
import TemplatePage from "@/components/templates/Layout.template";
import TemplatePost from "@/components/templates/post/TemplatePost.template";
// Styles
import styles from './SectionProduct.module.scss';

interface ISectionProduct {
    productId: number
}

const dummyProductsList = [
    {
        id: 1,
        name: 'Koszulka 610',
        description: 'Lorem ipsum dolor sit amet',
        img: [
            {
                src: "https://ireland.apollo.olxcdn.com/v1/files/jjbiypgxtwvx1-PL/image;s=1000x700",
                alt: ""
            },
            {
                src: "https://ireland.apollo.olxcdn.com/v1/files/co8to7cue9wx-PL/image;s=1000x700",
                alt: ""
            }
        ]
    },
    {
        id: 2,
        name: 'Koszulka',
        description: 'Lorem ipsum dolor sit amet',
        img: [
            {
                src: "https://ireland.apollo.olxcdn.com/v1/files/jjbiypgxtwvx1-PL/image;s=1000x700",
                alt: ""
            },
            {
                src: "https://ireland.apollo.olxcdn.com/v1/files/co8to7cue9wx-PL/image;s=1000x700",
                alt: ""
            }
        ]
    }
]



const SectionProduct: FC<ISectionProduct> = ({productId}) => {
    const product = dummyProductsList[productId]
    return (
        <div>
            <div className={styles.productName}>
                {product?.name}
            </div>
            <div className={styles.productDescription}>
                {product?.description}
            </div>
        </div>
    );
}

export default SectionProduct;