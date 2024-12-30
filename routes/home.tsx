import { FunctionComponent } from 'preact';
import { ICONS, PERSONAL_DETAILS, URLS } from '@lib';
import { H1, H2, Link } from '@components';

const LINKS: Record<'url' | 'label', string>[] = [
  { url: URLS.YOUTUBE, label: `${ICONS.FILE} Resume` },
  { url: URLS.GITHUB, label: `${ICONS.GITHUB} GitHub` },
  { url: URLS.LINKEDIN, label: `${ICONS.LINKEDIN} LinkedIn` },
  { url: URLS.YOUTUBE, label: `${ICONS.YOUTUBE} YouTube` },
] as const;

const Icon: FunctionComponent<
  {
    animate?: 'pulse' | 'wiggle' | 'bounce' | 'spin' | 'shake';
  }
> = (
  { children, animate },
) => {
  const animationClassName: string | undefined = (() => {
    switch (animate) {
      case 'pulse':
        return 'animate-pulse';
      case 'wiggle':
        return 'animate-wiggle';
      case 'bounce':
        return 'animate-bounce';
      case 'spin':
        return 'animate-spin';
      case 'shake':
        return 'animate-shake';
      default:
        return;
    }
  })();

  return (
    <span
      className={`inline-block${
        animationClassName ? ` ${animationClassName}` : ''
      }`}
    >
      {children}
    </span>
  );
};

const Introduction: FunctionComponent = () => {
  return (
    <section className="grid [grid-template-areas:'summary''image''links'] min-[289px]:[grid-template-areas:'summary_summary''image_links'] min-[416px]:[grid-template-areas:'summary_image''links_links'] min-[625px]:flex gap-4">
      <div className='contents min-[625px]:flex min-[625px]:flex-col min-[625px]:flex-[0_0_58%]'>
        <p className='[grid-area:summary]'>
          <Icon animate='pulse'>{ICONS.FIRE}</Icon> Passionate about{' '}
          <Icon animate='wiggle'>{ICONS.HAMMER}</Icon> building{' '}
          <Icon animate='bounce'>{ICONS.EMOTICON_COOL}</Icon> cool and{' '}
          <Icon animate='spin'>{ICONS.EMOTICON_TONGUE}</Icon> goofy stuff with
          {' '}
          <Icon animate='shake'>{ICONS.CODE}</Icon> code.
          <br />
          <br />
          Contact me at{' '}
          <Link
            className='break-all min-[625px]:break-normal'
            href={`mailto:${PERSONAL_DETAILS.EMAIL}`}
          >
            {PERSONAL_DETAILS.EMAIL}
          </Link>.
        </p>
        <ul className='[grid-area:links] grid grid-cols-2 min-[289px]:flex min-[289px]:flex-col min-[416px]:flex-row min-[625px]:mt-5 justify-between min-[625px]:justify-start gap-4'>
          {LINKS.map((link) => {
            return (
              <li>
                <Link className='text-nowrap' href={link.url}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='[grid-area:image] flex-1 flex justify-center'>
        <div className='relative min-[336px]:h-48 aspect-square bg-background border-4 border-foreground grayscale'>
          <img src='/images/me.png' />
        </div>
      </div>
    </section>
  );
};

const Trivia: FunctionComponent = () => {
  return (
    <section>
      <header>
        <H2 className='text-3xl'>
          Trivia
        </H2>
      </header>
      <main className='mt-2'>
        <ul className='flex flex-col list-square pl-4'>
          <li>
            I use <Link href={URLS.ARCH_LINUX}>{ICONS.ARCH}rch</Link> and{'  '}
            <Link href={URLS.NEOVIM}>{ICONS.NEOVIM}eovim</Link>{' '}
            <Link href={URLS.BTW_I_USE_ARCH_MEME}>BTW</Link>.
          </li>
          <li>
            I drink a lot of {ICONS.COFFEE}{' '}
            <Link href={URLS.COFFEE_SPELLED_BACKWARDS_IS_EEFFOC}>
              eeffoc
            </Link>.
          </li>
          <li>
            I like watching {ICONS.ANIMATION} anime and playing {ICONS.MOUSE}
            {' '}
            games.
          </li>
          <li>
            My favorite {ICONS.QUOTE} quote is{' '}
            <Link className='italic' href={URLS.BLUE_PERIOD_ANIME}>
              "Hard workers who do things they like are unstoppable."
            </Link>.
          </li>
        </ul>
      </main>
    </section>
  );
};

export default (() => {
  return (
    <main>
      <article className='flex flex-col gap-4'>
        <header>
          <H1 className='text-4xl text-center'>
            {PERSONAL_DETAILS.FULL_NAME}
          </H1>
        </header>
        <Introduction />
        <Trivia />
      </article>
    </main>
  );
}) satisfies FunctionComponent;
