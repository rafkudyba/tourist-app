import {gql} from '@apollo/client';

export const MUTATION_UPDATE_PRODUCT = gql`
mutation updateProduct($payload: ProductInput, $id: ID) {
  updateProduct(payload: $payload, id: $id)
}
`;