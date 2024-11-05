import { FontLeft } from '@brysonandrew/design/typography/font/item/Left';
import { TResolveWebFontConfig } from '@brysonandrew/uno-presets';
import { cx } from 'class-variance-authority';
import { FC } from 'react';

type TProps = { item: TResolveWebFontConfig };
export const FontItem: FC<TProps> = ({
  item: { key, name, provider, weights },
}) => {
  return (
    <li
      key={key}
      className={cx(
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
