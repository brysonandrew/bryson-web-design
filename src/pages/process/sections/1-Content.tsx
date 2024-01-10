import {
  ADDITIONAL_CONTENT,
  CONTENT_COST,
} from '../website/config';
import { Skeleton } from '../website/skeleton';
import { ParagraphLines } from '../website/layouts/ParagraphLines';
import { Annotations } from '../website/layouts/Annotations';
import { ImageAndText } from '../website/skeleton/image-and-text';
import { Focus } from '@components/interactive/focus';
import { Item } from '../website/breakdown/extras/Item';
import { useServicesC } from '@context/domains/services/useServicesC';
import { Price } from '../website/breakdown/Price';
import { Section } from '../Section';

export const Content = () => {
  const { extras } = useServicesC();
  const value = extras[ADDITIONAL_CONTENT];
  return (
    <Section title='Upgrade: Content'>
      <ParagraphLines
        lines={[
          'The rest of the space is your digital picture book.',
          'It is crucial to balance the textual with the visual.'
        ]}
      />
      <Annotations
        breakdown={
          <>
            <Item
              isN
              id={ADDITIONAL_CONTENT}
              price={CONTENT_COST}
              max={8}
              value={value}
            />
            <Price>{(value ?? 0) * CONTENT_COST}</Price>
          </>
        }
        diagram={
          <Skeleton>
            <ImageAndText>
              <Focus>{ADDITIONAL_CONTENT}</Focus>
            </ImageAndText>
          </Skeleton>
        }
      />
    </Section>
  );
};
