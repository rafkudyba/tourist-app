import {gql} from '@apollo/client';

export const MUTATION_CREATE_PRODUCT = gql`
mutation createProduct($payload: ProductInput) {
  createProduct(payload: $payload) 
}
`;