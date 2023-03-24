// import { Title } from "./Gallery.styled";
import { Section, Container } from "../LayoutStyled";

import ReactImageGallery from "react-image-gallery";
import images from "./imagesGallery";

export default function Gallery() {
  return (
    <Section id="gallery">
      <Container>
        {/* <Title>Pleasant viewing</Title> */}
        <ReactImageGallery items={images} />
      </Container>
    </Section>
  );
}
