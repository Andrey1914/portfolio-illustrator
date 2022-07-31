import { Copyright, List } from "./Footer.styled";

export default function Footer() {
  return (
    <footer>
      <Copyright>&copy;</Copyright>
      <div className="social-links">
        <List>
          <li className="social-links__item">
            <a
              className="social-links__link"
              href="https://instagram.com/tania.proskurnia?utm_medium=copy_link"
            >
              <svg className="social-links__icon">
                <use href="./icon/icons.svg#icon-instagram-icon"></use>
              </svg>
            </a>
          </li>
          <li className="social-links__item">
            <a
              className="social-links__link"
              href="https://www.facebook.com/tania.proskurnia"
            >
              <svg className="social-links__icon">
                <use href="./icon/icons.svg#icon-fb-icon"></use>
              </svg>
            </a>
          </li>
          <li className="social-links__item">
            <a
              className="social-links__link"
              href="https://t.me/Tania_Proskurnia"
            >
              <svg className="social-links__icon">
                <use href="./icon/icons.svg#icon-telegram-icon"></use>
              </svg>
            </a>
          </li>
          <li className="social-links__item">
            <a
              className="social-links__link"
              href="viber://chat?number=+380934846750"
            >
              <svg className="social-links__icon">
                <use href="./icon/icons.svg#icon-viber-icon"></use>
              </svg>
            </a>
          </li>
        </List>
      </div>
    </footer>
  );
}
