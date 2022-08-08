
import {FC} from 'react';

// Templates
import TemplatePage from '@/components/templates/Layout.template';

// Components
import HomePage from '@/components/views/main/HomePage.component';



const MainPage: FC = () => {
  return (
      <TemplatePage page={'Blog'}>
          <HomePage />
      </TemplatePage>
  )
}

export default MainPage;
