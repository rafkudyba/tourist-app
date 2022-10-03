import {gql} from '@apollo/client';

export const QUERY_GET_PRODUCT = gql`
query getProduct($id: ID!) {
  getProduct(id: $id) {
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