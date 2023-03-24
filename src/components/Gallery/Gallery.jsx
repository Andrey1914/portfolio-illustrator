import { Section, Container, Title } from "./Gallery.styled";

import ReactImageGallery from "react-image-gallery";
import images from "./imagesGallery";

export default function Gallery() {
  return (
    <Section>
      <Container>
        <Title>Pleasant viewing</Title>
        <ReactImageGallery items={images} />
      </Container>
    </Section>
  );
}
