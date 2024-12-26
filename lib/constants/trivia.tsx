import { Link } from '@components';
import { ICONS, URLS } from '@lib';

export const TRIVIA = [
  <>
    I use <Link href={URLS.ARCH_LINUX}>{ICONS.ARCH}rch</Link> and{'  '}
    <Link href={URLS.NEOVIM}>{ICONS.NEOVIM}eovim</Link>{' '}
    <Link href={URLS.BTW_I_USE_ARCH_MEME}>BTW</Link>.
  </>,
  <>
    I drink a lot of {ICONS.COFFEE}{' '}
    <Link href={URLS.COFFEE_SPELLED_BACKWARDS_IS_EEFFOC}>
      eeffoc
    </Link>.
  </>,
  `I like watching ${ICONS.ANIMATION} anime and playing ${ICONS.MOUSE} games.`,
  <>
    My favorite {ICONS.QUOTE} quote is{' '}
    <Link className='italic' href={URLS.BLUE_PERIOD_ANIME}>
      "Hard workers who do things they like are unstoppable."
    </Link>.
  </>,
] as const;
