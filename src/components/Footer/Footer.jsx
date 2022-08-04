import { Copyright, Link, List, Wrap } from "./Footer.styled";
import { FaInstagramSquare, FaTelegramPlane, FaViber } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

export default function Footer() {
  return (
    <footer>
      <Wrap>
        <Copyright>&copy;</Copyright>
        <List>
          <li>
            <Link href="https://instagram.com/tania.proskurnia?utm_medium=copy_link">
              <FaInstagramSquare size={30} />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/tania.proskurnia">
              <ImFacebook2 size={27} />
            </Link>
          </li>
          <li>
            <Link href="https://t.me/Tania_Proskurnia">
              <FaTelegramPlane size={30} />
            </Link>
          </li>
          <li>
            <Link href="viber://chat?number=+380934846750">
              <FaViber size={30} />
            </Link>
          </li>
        </List>
      </Wrap>
    </footer>
  );
}
