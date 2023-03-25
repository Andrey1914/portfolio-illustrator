import { SectionStyled, Title } from "./Gallery.styled";
import { Section, Container } from "../LayoutStyled";

import ReactImageGallery from "react-image-gallery";
import images from "./imagesGallery";

export default function Gallery() {
  return (
    <SectionStyled>
      <Section id="gallery">
        <Container>
          <Title>...the pictures I've been working on...</Title>
          <ReactImageGallery items={images} />
        </Container>
      </Section>
    </SectionStyled>
  );
}
