import {
  createContext,
  FC,
  PropsWithChildren,
} from 'react';
import { Footer } from './Footer';
import { Header } from './header';
import { Headline } from './headline';
import { Container } from './wrappers/Container';
import { View } from './wrappers/View';

type TProps = PropsWithChildren;
export const Basic: FC<TProps> = ({ children }) => {
  return (
    <View>
      <Container>
        <Header />
        <Headline />
        {children}
        <Footer />
      </Container>
    </View>
  );
};
