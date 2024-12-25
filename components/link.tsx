import { FunctionComponent } from 'preact';
import { JSX } from 'preact/jsx-runtime';

type Props = JSX.HTMLAttributes<HTMLAnchorElement>;

export const Link: FunctionComponent<Props> = ({ className, ...rest }) => {
  return (
    <a
      {...rest}
      className={`font-bold decoration-2 hover:underline${
        className ? ` ${className}` : ''
      }`}
      target='_blank'
      rel='noopener noreferrer'
    />
  );
};
