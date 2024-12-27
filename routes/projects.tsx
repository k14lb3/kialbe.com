import { FunctionComponent } from 'preact';
import { H1, PageInProgressImage } from '@components';

export default (() => {
  return (
    <>
      <header className='flex flex-col'>
        <H1 className='text-4xl'>
          Projects
        </H1>
      </header>
      <main className='mt-4'>
        <PageInProgressImage />
      </main>
    </>
  );
}) satisfies FunctionComponent;
