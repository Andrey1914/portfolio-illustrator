import { Item, Link, List, Title, Wrap, Img } from "./Header.styled";
import { HiOutlineIdentification } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../../jpg/photo_2021-12-08_22-34-32.jpg";
import pic from "../../jpg/циплята.jpg";

export default function Header() {
  return (
    <header>
      <Wrap>
        <img src={logo} className="App-logo" alt="logo" />
        <Title>Illustrator Tania Proskurnia</Title>
      </Wrap>
      <nav>
        <List>
          <Item>
            <Link href="/">
              <HiOutlineHome size={20} />
              Home
            </Link>
          </Item>
          <Item>
            <Link href="/">
              <HiOutlineIdentification size={20} />
              About
            </Link>
          </Item>
          <Item>
            <Link href="/">
              <HiOutlineMail size={20} />
              Contact
            </Link>
          </Item>
        </List>
      </nav>
      <Img src={pic} alt="illustrator" />
    </header>
  );
}
