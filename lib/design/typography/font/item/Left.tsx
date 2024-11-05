import { resolveFontProviderHref } from '@brysonandrew/design/typography/font/item/resolveHref';
import { TResolveWebFontConfig } from '@brysonandrew/uno-presets';
import { FC } from 'react';

type TProps = {
  partial: Pick<
    TResolveWebFontConfig,
    'name' | 'key' | 'weights' | 'provider'
  >;
};
export const FontLeft: FC<TProps> = ({
  partial: { key, name, weights, provider },
}) => {
  return (
    <div className='column-start'>
      <div className='row-base gap-4'>
        <div className='row-base gap-2'>
          <span className='text-xxs uppercase'>type</span>{' '}
          <span className='text-sm uppercase'>{key}</span>
        </div>
        <div className='row-base gap-2 bg-black'>
          <span className='text-xxs uppercase'>
            weights
          </span>{' '}
          <span className='text-sm uppercase'>
            {weights?.join('/')}
          </span>
        </div>
        <a
          className='row-base gap-2 w-36 bg-black'
          target='_blank'
          href={resolveFontProviderHref(provider)} rel="noreferrer"
        >
          <span className='text-xxs uppercase'>
            provider
          </span>
          <span className='text-sm uppercase'>
            {provider}
          </span>
        </a>
      </div>
      <div className='row-base gap-2'>
        <span className='text-xxs uppercase'>name</span>{' '}
        <span className='uppercase'>{name}</span>
      </div>
    </div>
  );
};
