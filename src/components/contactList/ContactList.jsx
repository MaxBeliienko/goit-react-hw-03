import ContactCard from "../contactCard/ContactCard";
import css from "./ContactList.module.css";

const ContactList = ({ contactArray, deleteContact }) => {
  return (
    <ul className={css.contList}>
      {contactArray.map((contact) => {
        const { id } = contact;
        return (
          <li key={id}>
            <ContactCard
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
