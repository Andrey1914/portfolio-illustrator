import { Container, Title } from "./Gallery.styled";

import ReactImageGallery from "react-image-gallery";
import images from "./imagesGallery";

export default function Gallery() {
  return (
    <section className="section gallery">
      <Container>
        <Title>Pleasant viewing</Title>
        <ReactImageGallery items={images} />
      </Container>
    </section>
  );
}
