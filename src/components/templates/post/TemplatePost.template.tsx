import { FC } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Components
import ButtonLink from '@/components/design-system/links/link-button/ButtonLink.component';

// Styles
import styles from './TemplatePost.module.scss';
import "swiper/css";

// import {SwiperSlide} from 'swiper/react/swiper-react';

const TemplatePost: FC = ({children}) => {

    const dummyPostListItems = [
        {
            id: 1,
            name: "Post 1",
            body: "Post 1"
        },
        {
            id: 2,
            name: "Post 2",
            body: "Post 2"
        },
        {
            id: 3,
            name: "Post 3",
            body: "Post 3"
        },
        {
            id: 4,
            name: "Post 4",
            body: "Post 4"
        },

    ]

    return (
        <div className={styles.postWr}>
            <div className={styles.postsList}>

                <h3>Ostatnie posty</h3>

                {dummyPostListItems.map((post, index) => (
                    <div
                        className={styles.buttonWr}
                        key={index}
                    >
                        <ButtonLink
                            name={post.name}
                            href={`/blog/${String(post.id)}`}
                        />

                    </div>
                ))}
                {/*<Swiper*/}
                {/*    modules={[Navigation, Pagination, Scrollbar, A11y]}*/}
                {/*    spaceBetween={20}*/}
                {/*    slidesPerView={5}*/}
                {/*    draggable={true}*/}
                {/*    onSlideChange={() => console.log('slide change')}*/}
                {/*    onSwiper={(swiper) => console.log(swiper)}*/}
                {/*    direction={'vertical'}*/}
                {/*>*/}
                {/*{dummyPostListItems.map((post, index) => (*/}
                {/* // <ButtonLink key={index} name={post.name} href={`/blog/${post.id}`}/>*/}
                {/*    <SwiperSlide key={index}>*/}
                {/*        {index}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci amet commodi dignissimos dolorum error eveniet facilis itaque laboriosam non, nostrum numquam odit placeat praesentium quo ullam vel veritatis.*/}
                {/*    </SwiperSlide>*/}


                {/*))}*/}
                {/*    <SwiperSlide style={{height: '20px'}}>*/}
                {/*        <div style={{height: '20px'}}>*/}
                {/*            1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci amet commodi dignissimos dolorum error eveniet facilis itaque laboriosam non, nostrum numquam odit placeat praesentium quo ullam vel veritatis.*/}
                {/*        </div>*/}
                {/*    </SwiperSlide>*/}
                {/*    <SwiperSlide>*/}
                {/*        3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci amet commodi dignissimos dolorum error eveniet facilis itaque laboriosam non, nostrum numquam odit placeat praesentium quo ullam vel veritatis.*/}
                {/*    </SwiperSlide>*/}
                {/*    <SwiperSlide>*/}
                {/*        4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci amet commodi dignissimos dolorum error eveniet facilis itaque laboriosam non, nostrum numquam odit placeat praesentium quo ullam vel veritatis.*/}
                {/*    </SwiperSlide>*/}
                {/*    <SwiperSlide>*/}
                {/*        5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci amet commodi dignissimos dolorum error eveniet facilis itaque laboriosam non, nostrum numquam odit placeat praesentium quo ullam vel veritatis.*/}
                {/*    </SwiperSlide>*/}
                {/*</Swiper>*/}
            </div>
            <div className={styles.singlePost}>
                {children}
            </div>
        </div>
    );
}

export default TemplatePost;