import {FC} from 'react';

// Components
import Header from '@/components/global/header/Header.component';
import Footer from '@/components/global/footer/Footer.component';

// Styles
import styles from './Layout.module.scss';

interface ITemplatePage {
    page: string;
}

const TemplatePage:FC<ITemplatePage> = ({children, page}) => {
    return (
        <div className={styles.pageWrapper}>
            <Header page={page}/>
                <main className={styles.mainContent}>
                    {children} 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consequatur commodi veritatis. Eum molestiae distinctio est, quos totam tenetur laudantium fugiat sint vitae harum omnis ratione. Cum earum dolorem commodi praesentium officia, eveniet aut, quos aliquam explicabo tempora, cupiditate quo! Nisi modi numquam, iste sit aliquid, fugiat repellat tenetur inventore facere facilis dolores ipsum quibusdam dolor possimus consequatur neque nobis eligendi distinctio dolore eveniet. Porro perspiciatis velit, saepe tempora praesentium earum blanditiis laudantium repudiandae asperiores nesciunt sint, explicabo perferendis omnis consequuntur placeat aliquid accusantium fugiat recusandae nihil. Officia voluptates, possimus nesciunt minus ipsam aliquid laboriosam quibusdam laborum ullam eos modi fuga vel labore necessitatibus voluptatem ipsum rerum deleniti et exercitationem facere corrupti fugiat delectus unde ducimus? Quidem beatae illo magni. Provident nobis laudantium ea nesciunt ipsa. Tenetur omnis sunt pariatur. Quaerat delectus obcaecati dolorem sit minima deserunt qui illum maxime perferendis optio non quae fugit iusto quis nostrum, ipsam id repellat quam quas veritatis exercitationem facilis illo. Possimus saepe veniam optio maiores dolore tempora error quae vitae aspernatur laborum voluptas minima, harum ab natus ratione deserunt. Quasi, voluptate commodi. Incidunt optio sint minima, reiciendis ipsum accusamus possimus commodi non officia soluta libero omnis em sunt quos doloremdebitis mollitia ex?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consequatur commodi veritatis. Eum molestiae distinctio est, quos totam tenetur laudantium fugiat sint vitae harum omnis ratione. Cum earum dolorem commodi praesentium officia, eveniet aut, quos aliquam explicabo tempora, cupiditate quo! Nisi modi numquam, iste sit aliquid, fugiat repellat tenetur inventore facere facilis dolores ipsum quibusdam dolor possimus consequatur neque nobis eligendi distinctio dolore eveniet. Porro perspiciatis velit, saepe tempora praesentium earum blanditiis laudantium repudiandae asperiores nesciunt sint, explicabo perferendis omnis consequuntur placeat aliquid accusantium fugiat recusandae nihil. Officia voluptates, possimus nesciunt minus ipsam aliquid laboriosam quibusdam laborum ullam eos modi fuga vel labore necessitatibus voluptatem ipsum rerum deleniti et exercitationem facere corrupti fugiat delectus unde ducimus? Quidem beatae illo magni. Provident nobis laudantium ea nesciunt ipsa. Tenetur omnis sunt pariatur. Quaerat delectus obcaecati dolorem sit minima deserunt qui illum maxime perferendis optio non quae fugit iusto quis nostrum, ipsam id repellat quam quas veritatis exercitationem facilis illo. Possimus saepe veniam optio maiores dolore tempora error quae vitae aspernatur laborum voluptas minima, harum ab natus ratione deserunt. Quasi, voluptate commodi. Incidunt optio sint minima, reiciendis ipsum accusamus possimus commodi non officia soluta libero omnis rem sunt quos dolorem debitis mollitia ex?
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consequatur commodi veritatis. Eum molestiae distinctio est, quos totam tenetur laudantium fugiat sint vitae harum omnis ratione. Cum earum dolorem commodi praesentium officia, eveniet aut, quos aliquam explicabo tempora, cupiditate quo! Nisi modi numquam, iste sit aliquid, fugiat repellat tenetur inventore facere facilis dolores ipsum quibusdam dolor possimus consequatur neque nobis eligendi distinctio dolore eveniet. Porro perspiciatis velit, saepe tempora praesentium earum blanditiis laudantium repudiandae asperiores nesciunt sint, explicabo perferendis omnis consequuntur placeat aliquid accusantium fugiat recusandae nihil. Officia voluptates, possimus nesciunt minus ipsam aliquid laboriosam quibusdam laborum ullam eos modi fuga vel labore necessitatibus voluptatem ipsum rerum deleniti et exercitationem facere corrupti fugiat delectus unde ducimus? Quidem beatae illo magni. Provident nobis laudantium ea nesciunt ipsa. Tenetur omnis sunt pariatur. Quaerat delectus obcaecati dolorem sit minima deserunt qui illum maxime perferendis optio non quae fugit iusto quis nostrum, ipsam id repellat quam quas veritatis exercitationem facilis illo. Possimus saepe veniam optio maiores dolore tempora error quae vitae aspernatur laborum voluptas minima, harum ab natus ratione deserunt. Quasi, voluptate commodi. Incidunt optio sint minima, reiciendis ipsum accusamus possimus commodi non officia soluta libero omnis rem sunt quos dolorem debitis mollitia ex?
                </main>
            <Footer page={page}/>
        </div>
    );
}

export default TemplatePage;