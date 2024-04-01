import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const ContactCard = ({ contact, contId, contactArray, contactDelete }) => {
  const { name, number } = contact;
  const deleteContact = () => {
    const deleteFilterArray = contactArray.filter(
      (contact) => contact.id !== contId
    );
    contactDelete(deleteFilterArray);
  };
  return (
    <>
      <ul className={css["contact-info"]}>
        <li>
          <FaUser />
          {name}
        </li>
        <li>
          <FaPhoneAlt />
          {number}
        </li>
      </ul>
      <button type="button" onClick={deleteContact}>
        Delete
      </button>
    </>
  );
};

export default ContactCard;
