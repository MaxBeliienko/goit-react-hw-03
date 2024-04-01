import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactArray, deleteContact }) => {
  return (
    <ul className={css.contList}>
      {contactArray.map((contact) => {
        const { id } = contact;
        return (
          <li key={id}>
            <Contact
              contact={contact}
              contId={id}
              contactArray={contactArray}
              contactDelete={deleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
