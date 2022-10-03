import '@/styles/global.scss'
import 'react-quill/dist/quill.snow.css'
import type { AppProps } from 'next/app'
import {useEffect} from 'react';
import {ApolloClient, ApolloLink, ApolloProvider, from, HttpLink, InMemoryCache} from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  // const authMiddleware = new ApolloLink((operation, forward) => {
  //   // add the authorization to the headers
  //   operation.setContext(({ headers = {} }) => ({
  //     headers: {
  //       ...headers,
  //       // authorization: `Bearer ${getCookie('token')}`
  //     }
  //   }));
  //
  //   return forward(operation);
  // });
  //
  // const link = from([
  //   authMiddleware,
  //   new HttpLink({
  //     uri: `http://localhost:3002/graphql`,
  //     fetchOptions: {
  //       mode: 'cors'
  //     }
  //   })
  // ]);

  const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: 'http://localhost:3002/graphql'
      })
  return(
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>)
}

export default MyApp
