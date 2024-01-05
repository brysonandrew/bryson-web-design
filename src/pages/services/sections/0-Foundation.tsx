import { Labelled as Skeleton } from '../website/skeleton/Labelled';
import { Foundation as Breakdown } from '../website/breakdown/Foundation';
import { Annotations } from '../website/layouts/Annotations';
import { ParagraphLines } from '../website/layouts/ParagraphLines';

export const Foundation = () => {
  return (
    <>
      <ParagraphLines
        lines={[
          `Establish your presence with a conventional header and footer.`,
          `Let visitors know who you are and how they can contact you.`,
          `Then use the part in between to persuade visitors to engage.`,
        ]}
      />
      <Annotations
        breakdown={<Breakdown />}
        diagram={<Skeleton />}
      />
    </>
  );
};
