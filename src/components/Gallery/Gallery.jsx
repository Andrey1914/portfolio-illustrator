import { Container, List, Element, Title, Img, ImgBig } from "./Gallery.styled";
import pic1 from "../../jpg/девочка-на-дереве.jpg";
import pic2 from "../../jpg/девочка-на-подоконнике.jpg";
import pic3 from "../../jpg/девочка.jpg";
import pic4 from "../../jpg/бабушка.jpg";
import pic5 from "../../jpg/школьники.jpg";
import pic6 from "../../jpg/дружная-семейка.jpg";
import pic7 from "../../jpg/семья-собралась-вместе.jpg";
import pic8 from "../../jpg/поросята.jpg";
import pic9 from "../../jpg/медведи.jpg";
import pic10 from "../../jpg/девочка-гуляет-с-собакой.jpg";
import pic11 from "../../jpg/дядя.jpg";
import pic12 from "../../jpg/ежики.jpg";
import pic13 from "../../jpg/ленивец.jpg";
import pic14 from "../../jpg/выдуманный-персонаж.jpg";
import pic15 from "../../jpg/bear-d2x.jpg";

export default function Gallery() {
  return (
    <section className="section gallery">
      <Container>
        <Title>Pleasant viewing</Title>
        <List>
          <Element>
            <Img src={pic1} alt="девочка на дереве" />
          </Element>
          <Element>
            <Img src={pic2} alt="девочка на подоконнике" />
          </Element>
          <Element>
            <Img src={pic3} alt="девочка" />
          </Element>
          <Element>
            <Img src={pic4} alt="бабушка.jpg" />
          </Element>
          <Element>
            <Img src={pic15} alt="bear" />
          </Element>
          <Element>
            <ImgBig src={pic5} alt="школьники" />
          </Element>
          <Element>
            <ImgBig src={pic6} alt="дружная семейка" />
          </Element>
          <Element>
            <ImgBig src={pic7} alt="семья собралась вместе" />
          </Element>
          <Element>
            <Img src={pic8} alt="поросята" />
          </Element>
          <Element>
            <Img src={pic9} alt="медведи" />
          </Element>
          <Element>
            <Img src={pic10} alt="девочка гуляет с собакой" />
          </Element>
          <Element>
            <Img src={pic11} alt="дядя" />
          </Element>
          <Element>
            <Img src={pic12} alt="ежики" />
          </Element>
          <Element>
            <Img src={pic13} alt="ленивец" />
          </Element>
          <Element>
            <ImgBig src={pic14} alt="выдуманный персонаж" />
          </Element>
        </List>
      </Container>
    </section>
  );
}
