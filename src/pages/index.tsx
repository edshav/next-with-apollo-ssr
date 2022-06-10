import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { useApolloClient } from '@apollo/client';

import { LanguageSwitcher } from '../components';
import Link from 'next/link';

const IndexPage: NextPage = () => {
  const [t] = useTranslation('common');
  const apolloClient = useApolloClient();

  return (
    <div>
      <Link href="/ssr">
        <a>Go to SSR Page</a>
      </Link>
      <p
        dangerouslySetInnerHTML={{
          __html: t('greetings', { version: apolloClient.version }),
        }}
      />

      <LanguageSwitcher />
    </div>
  );
};

export default IndexPage;
