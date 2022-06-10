import { gql } from '@apollo/client';

export const FETCH_CONTINENTS = gql`
  query FetchContinents {
    continents {
      code
      name
    }
  }
`;
