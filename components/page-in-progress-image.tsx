import { FunctionComponent } from 'preact';

export const PageInProgressImage: FunctionComponent = () => {
  return (
    <div className='relative h-full max-h-80 aspect-square grayscale mx-auto font-bold border-4 border-foreground overflow-hidden [&>*]:text-nowrap'>
      <img src='/images/wheelbarrow.png' />
      <p className='absolute inline-block top-0 left-0 text-5xl'>sorry bro</p>
      <p className='absolute inline-block top-14 left-10 text-xl text-center'>
        the page<br />is still<br />being built
      </p>
      <p className='absolute inline-block bottom-0 left-5 text-2xl'>
        keep browsing
      </p>
    </div>
  );
};
