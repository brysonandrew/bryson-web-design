import { TResolveWebFontConfig } from '@brysonandrew/uno-presets';
import { FontLeft } from '@pages/_workshop/design/font/item/Left';
import { FontRight } from '@pages/_workshop/design/font/item/Right';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = { item: TResolveWebFontConfig };
export const FontItem: FC<TProps> = ({
  item: { key, name, provider, weights },
}) => {
  return (
    <li
      key={key}
      className={clsx(
        'column-start md:row-end-space px-2 py-1.5',
      )}
      style={{ fontFamily: name }}
    >
      <FontLeft
        partial={{ key, name, provider, weights }}
      />
      {/* <FontRight partial={{ provider, weights }} /> */}
    </li>
  );
};
