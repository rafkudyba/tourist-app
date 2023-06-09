
import {FC} from 'react';

// Templates
import TemplatePage from '@/components/templates/Layout.template';

// Components
import HomePage from '@/components/views/main/HomePage.component';
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

    //TODO: get products
    const data: any[] = [];

    return {
        props: {
            products: data,
        },
        revalidate: 10,
    }
}

export default MainPage;
