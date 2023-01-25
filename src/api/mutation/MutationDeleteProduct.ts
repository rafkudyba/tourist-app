import {gql} from '@apollo/client';

export const MUTATION_DELETE_PRODUCT = gql`
mutation deleteProduct($id: ID) {
  deleteProduct(id: $id)
}
`;