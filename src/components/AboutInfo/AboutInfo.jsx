import React from "react";
import pic from "../../jpg/tania-proskurnia.jpg";

// export default function About() {
//   return (
//     <div class="biography">
//       <img class="biography__foto" src={pic} alt="Фотография автора" />
//       <div class="biography__card">
//         <h2 class="biography__title">A little about myself.</h2>
//         <p class="biography__text">
//           Hello! My name is Tania. I am from Ukraine. I love painting and since
//           early years I have been honing my skills, first at a children's art
//           school, then at the university. I worked in an art workshop. I love
//           reading stories and conveying my feelings in illustrations, thus
//           giving people new emotions. I draw both digitally and using
//           traditional media.
//         </p>
//       </div>
//     </div>
//   );
// }
export const Modal = ({
  isVisible = false,
  title,
  content,
  footer,
  onClose,
}) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button type="button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <img src={pic} alt="" width="320px" />
          <div className="modal-content">{content}</div>
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};
