import React from "react";
import { Modal } from "../AboutInfo/AboutInfo";
import { Button, List, Title, Wrap, Img } from "./Header.styled";
import {
  HiOutlineIdentification,
  HiOutlineHome,
  HiOutlineMail,
} from "react-icons/hi";
import logo from "../../jpg/photo_2021-12-08_22-34-32.jpg";
import pic from "../../jpg/циплята.jpg";

export default function Header() {
  const [isModal, setModal] = React.useState(false);
  return (
    <header>
      <Wrap>
        <img src={logo} className="App-logo" alt="logo" />
        <Title>Illustrator Tania Proskurnia</Title>
      </Wrap>
      <nav>
        <List>
          <li>
            <Button type="button">
              <HiOutlineHome size={20} />
              Home
            </Button>
          </li>
          <li>
            <Button type="button" onClick={() => setModal(true)}>
              <HiOutlineIdentification size={20} />
              About
            </Button>
          </li>
          <li>
            <Button type="button">
              <HiOutlineMail size={20} />
              Contact
            </Button>
          </li>
        </List>
      </nav>
      <Modal
        isVisible={isModal}
        title="A little about myself."
        content={
          <p>
            Hello! My name is Tania. I am from Ukraine. I love painting and
            since // early years I have been honing my skills, first at a
            children's art // school, then at the university. I worked in an art
            workshop. I love // reading stories and conveying my feelings in
            illustrations, thus // giving people new emotions. I draw both
            digitally and using // traditional media.
          </p>
        }
        footer={<button>Cancel</button>}
        onClose={() => setModal(false)}
      />
      <Img src={pic} alt="циплята" />
    </header>
  );
}
