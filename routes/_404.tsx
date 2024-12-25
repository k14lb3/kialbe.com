import { Head } from '$fresh/runtime.ts';
import { FunctionComponent } from 'preact';
import { PageNotFoundImage } from '@components';

export default (() => {
  return (
    <>
      <Head>
        <title>Karl Ivan Alberto - Page not found</title>
      </Head>
      <main class='mt-14'>
        <PageNotFoundImage />
      </main>
    </>
  );
}) satisfies FunctionComponent;
