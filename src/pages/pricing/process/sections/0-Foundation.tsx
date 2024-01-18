import { Labelled as Skeleton } from '../website/skeleton/Labelled';
import { Foundation as Breakdown } from '../website/breakdown/Foundation';
import { Annotations } from '../website/layouts/Annotations';
import { ParagraphLines } from '../website/layouts/ParagraphLines';
import { FOUNDATION_COST } from '../website/config';
import { Price } from '../website/breakdown/Price';
import { Section } from '../Section';

export const Foundation = () => {
  return (
    <Section title='Package: Starter'>
      <ParagraphLines
        lines={[
          `Establish your presence with a conventional header and footer.`,
          `Let visitors know who you are and how they can contact you.`,
        ]}
      />
      <Annotations
        breakdown={
          <>
            <Breakdown />
            <Price>{FOUNDATION_COST}</Price>
          </>
        }
        diagram={<Skeleton />}
      />
    </Section>
  );
};
