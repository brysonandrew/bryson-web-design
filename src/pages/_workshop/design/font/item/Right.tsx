import { TResolveWebFontConfig } from '@brysonandrew/uno-presets';
import { resolveFontProviderHref } from '@pages/_workshop/design/font/item/resolveHref';
import { FC } from 'react';

type TProps = {
  partial: Pick<
    TResolveWebFontConfig,
    'provider' | 'weights'
  >;
};
export const FontRight: FC<TProps> = ({
  partial: { provider, weights },
}) => {
  return (
    <div className='row-end gap-8'>
      <div className='row-base gap-2 w-36 bg-black'>
        <span className='text-xxs uppercase'>weights</span>{' '}
        <span className='text-sm uppercase'>
          {weights?.join('/')}
        </span>
      </div>
      <a
        className='row-base gap-2 w-36 bg-black'
        target='_blank'
        href={resolveFontProviderHref(provider)}
      >
        <span className='text-xxs uppercase'>provider</span>
        <span className='text-sm uppercase'>
          {provider}
        </span>
      </a>
    </div>
  );
};
