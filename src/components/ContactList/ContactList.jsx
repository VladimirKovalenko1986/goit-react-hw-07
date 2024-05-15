import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.conteiner}>
      {contacts.map((item) => (
        <li key={item.id}>
          <Contact data={item} />
        </li>
      ))}
    </ul>
  );
}
