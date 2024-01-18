import { Section } from '../Section';
import { Price } from '../website/breakdown/Price';
import { ParagraphLines } from '../website/layouts/ParagraphLines';

export const Animated = () => {
  return (
    <Section title="">
      <ParagraphLines
        lines={[
          ` Bring your web presence to life with animations
            that respond to your users' interactions`,
        ]}
      />
    </Section>
  );
};
