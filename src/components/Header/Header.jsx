import { Item, Link, List, Title, Wrap } from "./Header.styled";
import logo from "./logo.svg";

export default function Header() {
  return (
    <header>
      <Wrap>
        <img src={logo} className="App-logo" alt="logo" />
        <Title>Illustrator Tania Proskurnia</Title>
      </Wrap>
      <img className="img" src="/" alt="illustrator" />
      <nav>
        <List>
          <Item>
            <Link href="/">Home</Link>
          </Item>
          <Item>
            <Link href="/">About</Link>
          </Item>
          <Item>
            <Link href="/">Contact</Link>
          </Item>
        </List>
      </nav>
    </header>
  );
}
