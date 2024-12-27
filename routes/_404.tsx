import { Head } from '$fresh/runtime.ts';
import { FunctionComponent } from 'preact';
import { PageNotFoundImage } from '@components';

export default (() => {
  return (
    <main>
      <Head>
        <title>Karl Ivan Alberto - Page not found</title>
      </Head>
      <article>
        <main class='mt-[3.75rem]'>
          <PageNotFoundImage />
        </main>
      </article>
    </main>
  );
}) satisfies FunctionComponent;
