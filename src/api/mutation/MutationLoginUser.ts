import {gql} from '@apollo/client';

export const MUTATION_LOGIN_USER = gql`
mutation loginUser($payload: UserAuthInput) {
  loginUser(payload: $payload)
}
`;