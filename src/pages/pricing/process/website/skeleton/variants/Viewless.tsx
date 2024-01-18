import { FC, PropsWithChildren } from 'react';
import { Footer } from '../Footer';
import { Header } from '../header';
import { Headline } from '../headline';
import { Container } from '../wrappers/Container';

type TProps = PropsWithChildren;
export const Viewless: FC<TProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Headline />
      {children}
      <Footer />
    </Container>
  );
};
