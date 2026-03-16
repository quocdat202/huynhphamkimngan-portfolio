import { useContext, useRef, useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import { dataContext } from "../../data/DataContext";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const data = useContext(dataContext);
  const contact = data?.contact;
  const form = useRef();
  const [done] = useState(false);

  if (!contact) return null;

  function sendEmail() {
    var message = document.getElementById("message").value;
    var mailtoLink = `mailto:${contact.email}?subject=${contact.mailtoSubject}&body=${message}`;
    window.location.href = mailtoLink;
  }

  return (
    <div className="contact-form" id="contact">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>{contact.title}</span>
          <span>{contact.subtitle}</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" id="name" className="user" placeholder={contact.formPlaceholders.name} />
          <input type="email" name="user_email" id="email" className="user" placeholder={contact.formPlaceholders.email} />
          <textarea name="message" className="user" id="message" placeholder={contact.formPlaceholders.message} />
          <input type="submit" value={contact.submitButtonText} className="button" />
          <span>{done && contact.successMessage}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
