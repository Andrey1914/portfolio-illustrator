import React from "react";

import {
  FaInstagram,
  FaTelegramPlane,
  FaViber,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  StickFollowIcon,
  SocialIconList,
  SocialIconItem,
  SocialLink,
  SocialIconText,
} from "./SocialIconStyled";

export const SocialIcons = () => {
  return (
    <StickFollowIcon>
      <SocialIconList>
        <SocialIconItem>
          <SocialLink href="https://instagram.com/tania.proskurnia?utm_medium=copy_link">
            <FaInstagram size={18} />
          </SocialLink>
        </SocialIconItem>

        <SocialIconItem>
          <SocialLink href="https://www.facebook.com/tania.proskurnia">
            <FaFacebookF size={18} />
          </SocialLink>
        </SocialIconItem>
        <SocialIconItem>
          <SocialLink href="https://www.linkedin.com/in/%D1%82%D0%B0%D0%BD%D1%8F-%D0%BF%D1%80%D0%BE%D1%81%D0%BA%D1%83%D1%80%D0%BD%D1%8F-301123238/">
            <FaLinkedinIn size={18} />
          </SocialLink>
        </SocialIconItem>
        <SocialIconItem>
          <SocialLink href="https://t.me/Tania_Proskurnia">
            <FaTelegramPlane size={18} />
          </SocialLink>
        </SocialIconItem>
        <SocialIconItem>
          <SocialLink href="viber://chat?number=+380934846750">
            <FaViber size={18} />
          </SocialLink>
        </SocialIconItem>
      </SocialIconList>
      <SocialIconText>Follow me</SocialIconText>
    </StickFollowIcon>
  );
};
