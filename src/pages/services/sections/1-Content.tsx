import {
  ADDITIONAL_CONTENT,
  CONTENT_COST,
} from '../website/config';
import { Basic as Skeleton } from '../website/skeleton/Basic';
import { ParagraphLines } from '../website/layouts/ParagraphLines';
import { Annotations } from '../website/layouts/Annotations';
import { ImageAndText } from '../website/skeleton/image-and-text';
import { Focus } from '@components/buttons/focus';
import { Item } from '../website/breakdown/extras/Item';
import { useServices } from '@context/domains/services';
import { Price } from '../website/breakdown/Price';

export const Content = () => {
  const { extras } = useServices();
  const value = extras[ADDITIONAL_CONTENT];
  return (
    <>
      <ParagraphLines
        lines={[
          `Here we have an opportunity to take our vistors on a journey.`,
          `The image next to text combination works well for websites. Think picturebook.`,
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
            <div className='column items-stretch gap-4'>
              <Price>{(value ?? 0) * CONTENT_COST}</Price>
            </div>
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
      {/* <div className='column items-stretch gap-4'>
        <Price>{(value ?? 0) * CONTENT_COST}</Price>
      </div> */}
    </>
  );
};
