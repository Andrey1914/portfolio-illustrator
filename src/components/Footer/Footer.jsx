import { Copyright, Wrap, GitHubLink } from "./Footer.styled";
import { BsGithub } from "react-icons/bs";
import { Container } from "../LayoutStyled";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Wrap>
        <Container>
          <Copyright>
            &copy; Copyright {year} by
            <GitHubLink
              href="https://github.com/Andrey1914"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={24} />
            </GitHubLink>
          </Copyright>
        </Container>
      </Wrap>
    </footer>
  );
}
