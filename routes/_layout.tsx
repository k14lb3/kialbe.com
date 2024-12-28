import type { PageProps } from '$fresh/server.ts';
import { FunctionComponent } from 'preact';

const NAVIGATIONS = ['home', 'projects', 'blogs'] as const;

const Navigation: FunctionComponent<Omit<PageProps, 'Component'>> = (
  { url },
) => {
  return (
    <nav>
      <ul className='flex min-[416px]:justify-between min-[519px]:justify-end gap-4 font-bold uppercase'>
        {NAVIGATIONS.map((navigation) => {
          return (
            <li>
              <a
                className={`block py-1 border-x-2 before:content-['_'] before:py-1 before:whitespace-pre after:content-['_'] after:py-1 after:whitespace-pre${
                  `/${navigation}` !== url.pathname
                    ? ' border-background'
                    : ' border-foreground before:border-y-2 before:border-foreground after:border-y-2 after:border-foreground'
                } cursor-pointer`}
                href={`/${navigation}`}
              >
                {navigation}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

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
