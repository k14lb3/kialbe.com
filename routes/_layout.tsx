import type { PageProps } from '$fresh/server.ts';
import { FunctionComponent } from 'preact';
import { Navigation } from '@components';

export default (({ Component, ...rest }) => {
  return (
    <>
      <header>
        <Navigation {...rest} />
      </header>
      <Component />
    </>
  );
}) satisfies FunctionComponent<PageProps>;
