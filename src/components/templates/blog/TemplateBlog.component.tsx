import { FC } from 'react';
import Link from 'next/link';

// Styles
import styles from './TemplateBlog.module.scss'

const TemplateBlog: FC = ({children}) => {

    const dummyPostListItems = [
        {
            id: 1,
            name: "Post 1",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat praesentium reprehenderit similique tempore! Dolores eum ipsum iusto nulla officia porro!"
        },
        {
            id: 2,
            name: "Post 2",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat praesentium reprehenderit similique tempore! Dolores eum ipsum iusto nulla officia porro!"
        },
        {
            id: 3,
            name: "Post 3",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat praesentium reprehenderit similique tempore! Dolores eum ipsum iusto nulla officia porro!"
        },
        {
            id: 4,
            name: "Post 4",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat praesentium reprehenderit similique tempore! Dolores eum ipsum iusto nulla officia porro!"
        },
        {
            id: 3,
            name: "Post 3",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat praesentium reprehenderit similique tempore! Dolores eum ipsum iusto nulla officia porro!"
        },
        {
            id: 4,
            name: "Post 4",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat praesentium reprehenderit similique tempore! Dolores eum ipsum iusto nulla officia porro!"
        },

    ]

    return (
        <div className={styles.postsList}>
            {dummyPostListItems.map((post, index) => (
                <Link
                    href={`blog/${String(post.id)}`}
                    key={index}
                >
                    <div className={styles.post}>
                        <div>
                            {post.name}
                        </div>
                        <div>
                            {post.body}
                        </div>
                    </div>
                </Link>

            ))

            }

        </div>

    );
}

export default TemplateBlog;
