import { FunctionComponent } from 'preact';
import { NAVIGATIONS } from '@lib';
import { PageProps } from '$fresh/server.ts';

export const Navigation: FunctionComponent<Omit<PageProps, 'Component'>> = (
  { url },
) => {
  return (
    <nav>
      <ul className='flex justify-end gap-4 font-bold uppercase'>
        {NAVIGATIONS.map((navigation) => {
          const isIn = `/${navigation}` === url.pathname;

          return (
            <li>
              <a
                className={`block py-1 border-x-2 before:content-['_'] before:py-1 before:whitespace-pre after:content-['_'] after:py-1 after:whitespace-pre${
                  !isIn
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
