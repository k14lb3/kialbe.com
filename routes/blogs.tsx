import { FunctionComponent } from 'preact';
import { H1, PageInProgressImage } from '@components';

export default (() => {
  return (
    <main>
      <article>
        <header>
          <H1 className='text-4xl'>
            Blogs
          </H1>
        </header>
        <main className='mt-4'>
          <PageInProgressImage />
        </main>
      </article>
    </main>
  );
}) satisfies FunctionComponent;
