import { FunctionComponent } from 'preact';
import { DETAIL, ICONS } from '@lib';
import { Link } from '@components';

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
    <section className='flex'>
      <div className='flex flex-col flex-[0_0_55%]'>
        <p>
          <Icon animate='pulse'>{ICONS.FIRE}</Icon> Passionate about{' '}
          <Icon animate='wiggle'>{ICONS.HAMMER}</Icon> building{' '}
          <Icon animate='bounce'>{ICONS.FACE_GRIN_STARS}</Icon> cool and{' '}
          <Icon animate='spin'>{ICONS.FACE_GRIN_TONGUE}</Icon> goofy stuff with
          {' '}
          <Icon animate='shake'>{ICONS.CODE}</Icon> code.
        </p>
        <p>&nbsp;</p>
        <p>
          Contact me at{' '}
          <Link href={`mailto:${DETAIL.EMAIL}`}>{DETAIL.EMAIL}</Link>.
        </p>
      </div>
      <div className='flex-1 flex justify-center'>
        <div className='relative w-48 aspect-square bg-background border-4 border-foreground grayscale'>
          <img src='/images/me.png' />
        </div>
      </div>
    </section>
  );
};

export default (() => {
  return (
    <main>
      <article className='flex flex-col gap-4'>
        <header>
          <h1 className='w-fit px-2 text-3xl font-bold uppercase border-2 border-foreground'>
            {DETAIL.FULL_NAME}
          </h1>
        </header>
        <Introduction />
      </article>
    </main>
  );
}) satisfies FunctionComponent;
