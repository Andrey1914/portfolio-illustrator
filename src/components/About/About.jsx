import pic from "../../jpg/tania-proskurnia.jpg";
import {
  SectionStyled,
  AboutHeader,
  AboutTitle,
  AboutBody,
  AboutContent,
} from "./AboutStyled";
import { Section, Container } from "../LayoutStyled";

export const About = () => {
  return (
    <SectionStyled>
      <Section id="about">
        <Container>
          <AboutHeader>
            <AboutTitle>A little about myself.</AboutTitle>
          </AboutHeader>
          <AboutBody>
            <img src={pic} alt="Illustrator Tania Proskurnia" width="320px" />
            <AboutContent>
              Hello! <br />
              My name is Tania. I am from Ukraine. I love painting and since
              early years I have been honing my skills, first at a children's
              art school, then at the university. I worked in an art workshop. I
              love reading stories and conveying my feelings in illustrations,
              thus giving people new emotions. I draw both digitally and using
              traditional media.
            </AboutContent>
          </AboutBody>
        </Container>
      </Section>
    </SectionStyled>
  );
};
