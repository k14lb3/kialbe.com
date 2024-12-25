import type { PageProps } from '$fresh/server.ts';
import { FunctionComponent } from 'preact';

export default (({ Component }) => {
  return (
    <html>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Karl Ivan Alberto</title>
        <link rel='stylesheet' href='/styles/index.css' />
      </head>
      <body className='flex flex-col justify-center items-center w-full max-w-3xl py-4 [&>*]:w-full'>
        <Component />
      </body>
    </html>
  );
}) satisfies FunctionComponent<PageProps>;
