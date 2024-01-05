import { Focus } from '@components/buttons/focus';
import { FOOTER, HEADER, HEADLINE } from '../config';
import { Footer } from './Footer';
import { Header } from './header';
import { Headline } from './headline';
import { Container } from './wrappers/Container';
import { View } from './wrappers/View';

export const Labelled = () => {
  return (
    <View>
      <Container>
        <Header>
          <Focus>{HEADER}</Focus>
        </Header>
        <Headline>
          <Focus>{HEADLINE}</Focus>
        </Headline>
        <Footer>
          <Focus>{FOOTER}</Focus>
        </Footer>
      </Container>
    </View>
  );
};
