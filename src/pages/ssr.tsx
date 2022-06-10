import Link from 'next/link';
import { Continents } from '../components/Continents';
import { FETCH_CONTINENTS } from '../gql/FETCH_CONTINENTS';
import { initializeApollo, addApolloState } from '../lib/apollo';
import type { GetServerSidePropsContext } from 'next';

const SSRPage = () => (
  <div>
    <Link href="/">
      <a>Go to Home Page</a>
    </Link>

    <Continents />
  </div>
);

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const apolloClient = initializeApollo(null, ctx);

  await apolloClient.query({
    query: FETCH_CONTINENTS,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default SSRPage;
