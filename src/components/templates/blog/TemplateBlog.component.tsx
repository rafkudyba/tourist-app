import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Styles
import styles from './TemplateBlog.module.scss'

const TemplateBlog: FC = ({children}) => {

    const dummyPostListItems = [
        {
            id: 1,
            name: "Post 1",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat praesentium reprehenderit similique tempore! Dolores eum ipsum iusto nulla officia porro!",
            date: '12-05-2022'
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
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat praesentium reprehenderit similique tempore! Dolores eum ipsum iusto nulla officia porro! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat praesentium reprehenderit similique tempore! Dolores eum ipsum iusto nulla officia porro! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat praesentium reprehenderit similique tempore! Dolores eum ipsum iusto nulla officia porro!"
        },

    ]

    return (
        <div className={styles.postListWr}>
            <div className={styles.postListHeader}>
                Nasze posty
            </div>
            <div className={styles.postListDescription}>
                Lorem ip[sumeLorem ip[sumeLorem ip[sumeLorem ip[sumeLorem ip[sumeLorem ip[sumeLorem ip[sumeLorem ip[sumeLorem ip[sumeLorem ip[sumeLorem ip[sume
            </div>
            <div className={styles.postsList}>
                {dummyPostListItems.map((post, index) => (
                    <Link
                        href={`blog/${String(post.id)}`}
                        key={index}
                        passHref
                    >
                        <div className={styles.post}>
                            <div
                                className={styles.imageWr}
                                style={{
                                    backgroundImage: `url(https://ireland.apollo.olxcdn.com/v1/files/co8to7cue9wx-PL/image;s=1000x700)`
                                }}
                            />
                            <div className={styles.postName}>
                                {post.name}
                            </div>
                            <div className={styles.postBodyShort}>
                                {post.body}
                            </div>
                            <div className={styles.postDate}>
                                {post.date}
                            </div>
                        </div>
                    </Link>

                ))

                }

            </div>
        </div>


    );
}

export default TemplateBlog;
