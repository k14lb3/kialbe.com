import { FunctionComponent } from 'preact';

export const PageNotFoundImage: FunctionComponent = () => {
  return (
    <div className='relative w-80 aspect-square grayscale mx-auto font-bold border-4 border-foreground overflow-hidden'>
      <img src='/images/patrick.png' />
      <p className='absolute inline-block top-1/2 left-4 translate-y-[-50%] text-7xl'>
        p<br />a<br />g<br />e<br />
      </p>
      <p className='absolute inline-block top-10 right-4 text-3xl text-center'>
        found<br />
        <span className='text-4xl'>not</span>
      </p>
      <p className='absolute inline-block bottom-32 right-4 text-6xl text-center'>
        40
      </p>
      <p className='absolute inline-block bottom-10 right-2 text-8xl text-center'>
        4
      </p>
    </div>
  );
};
