import { List, Title } from "./Gallery.styled";

export default function Gallery() {
  return (
    <section className="section gallery">
      <div className="container">
        <Title>Pleasant viewing</Title>
        <List>
          <li className="gallery__item">
            <img
              src="../../jpg/девочка-на-дереве.jpg"
              className="gallery__image"
              alt="девочка на дереве"
            />
          </li>
          <li className="gallery__item">
            <img
              src="./jpg/девочка-на-подоконнике.jpg"
              className="gallery__image"
              alt="девочка на подоконнике"
            />
          </li>
          <li className="gallery__item">
            <img
              src="./jpg/девочка.jpg"
              className="gallery__image"
              alt="девочка"
            />
          </li>
          <li className="gallery__item">
            <img
              src="./jpg/бабушка.jpg"
              className="gallery__image"
              alt="бабушка.jpg"
            />
          </li>
          <li className="gallery__item gallery__item--diferent">
            <img
              src="./jpg/школьники.jpg"
              className="gallery__image gallery__image--big"
              alt="школьники"
            />
          </li>
          <li className="gallery__item gallery__item--diferent">
            <img
              src="./jpg/дружная-семейка.jpg"
              className="gallery__image gallery__image--big"
              alt="дружная семейка"
            />
          </li>
          <li className="gallery__item gallery__item--diferent">
            <img
              src="./jpg/семья-собралась-вместе.jpg"
              className="gallery__image gallery__image--big"
              alt="семья собралась вместе"
            />
          </li>
          <li className="gallery__item">
            <img
              src="./jpg/поросята.jpg"
              className="gallery__image"
              alt="поросята"
            />
          </li>
          <li className="gallery__item">
            <img
              src="./jpg/медведи.jpg"
              className="gallery__image"
              alt="медведи"
            />
          </li>
          <li className="gallery__item">
            <img
              src="./jpg/девочка-гуляет-с-собакой.jpg"
              className="gallery__image"
              alt="девочка гуляет с собакой"
            />
          </li>
          <li className="gallery__item">
            <img src="./jpg/дядя.jpg" className="gallery__image" alt="дядя" />
          </li>
          <li className="gallery__item">
            <img src="./jpg/ежики.jpg" className="gallery__image" alt="ежики" />
          </li>
          <li className="gallery__item">
            <img
              src="./jpg/ленивец.jpg"
              className="gallery__image"
              alt="ленивец"
            />
          </li>
          <li className="gallery__item gallery__item--diferent">
            <img
              src="./jpg/выдуманный-персонаж.jpg"
              className="gallery__image gallery__image--big"
              alt="выдуманный персонаж"
            />
          </li>
          <li className="gallery__item">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="./jpg/bear-m1x.jpg 1x, ./jpg/bear-m2x.jpg 2x"
              />

              <source
                media="(max-width: 1199px)"
                srcSet="./jpg/bear-t1x.jpg 1x, ./jpg/bear-t2x.jpg 2x"
              />

              <source
                media="(min-width: 1200px)"
                srcSet="./jpg/bear-d1x.jpg 1x, ./jpg/bear-d2x.jpg 2x"
              />

              <img
                src="./jpg/bear-m1x.jpg"
                className="gallery__image"
                alt="bear"
              />
            </picture>
          </li>
        </List>
      </div>
    </section>
  );
}
