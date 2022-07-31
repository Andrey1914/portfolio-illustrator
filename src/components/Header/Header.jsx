import { Item, Link, List, Title, Wrap, Img } from "./Header.styled";
import logo from "../../jpg/photo_2021-12-08_22-34-32.jpg";
import pic from "../../jpg/циплята.jpg";

export default function Header() {
  return (
    <header>
      <Wrap>
        <img src={logo} className="App-logo" alt="logo" />
        <Title>Illustrator Tania Proskurnia</Title>
      </Wrap>
      <Img src={pic} alt="illustrator" />

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
