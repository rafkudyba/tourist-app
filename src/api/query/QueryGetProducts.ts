import {gql} from '@apollo/client';

export const QUERY_GET_PRODUCTS = gql`
query getProducts {
    getProducts {
        id
        name
        description
        images {
            src
            alt
        }
        olxLink
    }
}
`;