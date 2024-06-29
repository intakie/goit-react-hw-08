import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';

import { selectFilteredContacts } from '../../redux/contacts/selectors';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
