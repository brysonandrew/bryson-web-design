import { TErrorDetail } from '@brysonandrew/utils-error';

export const resolveDetailMessage = (
  rows: TErrorDetail[],
) => {
  rows.forEach(({ loc, msg, type }: TErrorDetail) => {
    const content = `
    location: ${loc.join(' - ')}
    message: ${msg}
    type: ${type}
`;
    console.log(rows, content);
  });
};
