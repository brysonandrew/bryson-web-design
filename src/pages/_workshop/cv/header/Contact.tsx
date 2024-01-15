import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_URL,
} from '../copy';

export const Contact = () => (
  <div className='column-end w-full mt-2'>
    <p>{CONTACT_PHONE}</p>
    <p>{CONTACT_EMAIL}</p>
    <p>{CONTACT_URL}</p>
  </div>
);
