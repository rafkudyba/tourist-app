
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

    return {
        props: {
            products: data.getProducts
        },
        revalidate: 10,
    }
}

export default MainPage;
