import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_WITH_NATIONAL_TRUNK,
  CONTACT_URL,
} from '../copy';

export const Contact = () => (
  <div className='column-end w-full'>
    <p>
      <a target="_top" href={`https://${CONTACT_URL}`}>{CONTACT_URL}</a>
    </p>
    <p>
      <a target="_top" href={`mailto:${CONTACT_EMAIL}`}>
        {CONTACT_EMAIL}
      </a>
    </p>
    <p>
      <a target="_top" href={`tel:${CONTACT_PHONE_WITH_NATIONAL_TRUNK}`}>
        {CONTACT_PHONE}
      </a>
    </p>
  </div>
);
