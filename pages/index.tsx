
import {FC} from 'react';

// Templates
import TemplatePage from '@/components/templates/Layout.template';

// Components
import HomePage from '@/components/views/main/HomePage.component';
import client from '../apollo-client';
import {QUERY_GET_PRODUCTS} from '@/api/query/QueryGetProducts';
import {IProduct} from './products';

interface IMainPage {
    products: IProduct[]
}

const MainPage: FC<IMainPage> = ({products}) => {
  return (
      <TemplatePage page={'Blog'}>
          <HomePage products={products} />
      </TemplatePage>
  )
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: QUERY_GET_PRODUCTS,
    });
    console.log(data)
    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // // const { loading, error, data } = useQuery(QUERY_GET_PRODUCTS);
    // console.log(data)
    // // const res = await fetch('https://.../posts')
    // const posts = {}

    return {
        props: {
            products: data.getProducts
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

export default MainPage;
