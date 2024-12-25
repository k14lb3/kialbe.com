import { Link } from '@components';

export const TRIVIA = [
  <>
    I use <Link href='https://archlinux.org/'>󰣇rch</Link> and{'  '}
    <Link href='https://neovim.io/'>eovim</Link>{' '}
    <Link href='https://knowyourmeme.com/memes/btw-i-use-arch'>BTW</Link>.
  </>,
  <>
    I drink a lot of {' '}
    <Link href='https://knowyourmeme.com/memes/coffee-spelled-backwards-is-eeffoc'>
      eeffoc
    </Link>.
  </>,
  'I like watching anime and playing games.',
  <>
    My favorite quote is{' '}
    <Link
      className='italic'
      href='https://myanimelist.net/anime/46352/Blue_Period'
    >
      "Hard workers who do things they like are unstoppable."
    </Link>.
  </>,
] as const;
