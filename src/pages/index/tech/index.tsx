import { STORY } from '@constants/copy';
import { Title } from '../Title';
import { Buttons } from './buttons';
import { TitleOffset } from '@components/spaces/TitleOffset';

export const Tech = () => (
  <div className='flex flex-col items-center'>
    <Title>{STORY.tech}</Title>
    <TitleOffset />
    <Buttons />
  </div>
);
