import { FunctionComponent } from 'preact';
import { PageInProgressImage } from '@components';

export default (() => {
  return (
    <>
      <header className='flex flex-col'>
        <h1 className='w-fit px-2 text-3xl font-bold uppercase border-2 border-foreground'>
          Blogs
        </h1>
      </header>
      <main className='mt-4'>
        <PageInProgressImage />
      </main>
    </>
  );
}) satisfies FunctionComponent;
