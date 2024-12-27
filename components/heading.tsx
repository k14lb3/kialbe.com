import { FunctionComponent } from 'preact';
import { JSX } from 'preact/jsx-runtime';

type Props = JSX.HTMLAttributes<HTMLHeadingElement>;

const getCommonProps = ({ className, ...props }: Props): Props => {
  return {
    ...props,
    className: `w-fit px-2 font-bold uppercase border-2 border-foreground${
      className ? ` ${className}` : ''
    }`,
  };
};

export const H1: FunctionComponent<Props> = (props) => {
  return <h1 {...getCommonProps(props)} />;
};

export const H2: FunctionComponent<Props> = (props) => {
  return <h2 {...getCommonProps(props)} />;
};

export const H3: FunctionComponent<Props> = (props) => {
  return <h3 {...getCommonProps(props)} />;
};

export const H4: FunctionComponent<Props> = (props) => {
  return <h4 {...getCommonProps(props)} />;
};

export const H5: FunctionComponent<Props> = (props) => {
  return <h5 {...getCommonProps(props)} />;
};

export const H6: FunctionComponent<Props> = (props) => {
  return <h6 {...getCommonProps(props)} />;
};
