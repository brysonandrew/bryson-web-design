import { Container } from './wrappers/Container';
import { Footer } from './Footer';
import { Header } from './Header';
import { Headline } from './Headline';
import { ImageAndText } from './ImageAndText';
import { View } from './wrappers/View';

export const Skeleton = () => {
  return (
    <View>
      <Container>
        <Header />
        <Headline />
        <ImageAndText />
        <Footer />
      </Container>
    </View>
  );
};
