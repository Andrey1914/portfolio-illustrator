import styled from "styled-components";

export const StickFollowIcon = styled.div`
  top: 20%;
  left: 30px;
  width: 20px;
  height: 200px;
  position: fixed;
  margin-top: -100px;
`;

export const SocialIconList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SocialIconItem = styled.li`
  display: block;
  font-size: 12px;
  text-align: center;
  margin-bottom: 10px;
  transition: all 0.3s;
`;

export const SocialIconText = styled.p`
  top: 70px;
  left: -24px;
  width: 68px;
  height: 20px;
  color: #000;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
  position: relative;
  transform: rotate(-90deg);

  &::after {
    top: 9px;
    right: -48px;
    width: 40px;
    height: 1px;
    content: "";
    display: block;
    position: absolute;
    background-color: #000;
  }
`;

// @media only screen and (max-width: 991px) {
//     .stick_follow_icon {
//         width: unset;
//         height: unset;
//         position: static;
//         margin-top: unset;
//         display: flex;
//         flex-direction: row-reverse;
//         justify-content: center;
//         padding: 40px 0;
//         align-items: center;
//     }
//     .stick_follow_icon p {
//         top: unset;
//         left: unset;
//         width: unset;
//         height: unset;
//         white-space: nowrap;
//         position: relative;
//         transform: unset;
//         font-size: 17px;
//         margin-right: 65px;
//     }
//     .stick_follow_icon ul {
//         margin-bottom: 20px;
//     }
//     .stick_follow_icon ul li {
//         display: inline;
//         margin-bottom: 29px;
//         margin-right: 10px;
//     }
// }