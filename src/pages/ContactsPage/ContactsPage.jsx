import { useSelector } from 'react-redux';
import ContactEditor from '../../components/ContactEditor/ContactEditor';
import ContactList from '../../components/ContactList/ContactList';
import PageTitle from '../../components/PageTitle/PageTitle';
import { selectAllContacts } from '../../redux/contacts/selectors';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  const contacts = useSelector(selectAllContacts);

  return (
    <div>
      <PageTitle>Phonebook</PageTitle>
      <ContactEditor />
      <div className={css.contactsSection}>
        <h2>Contacts</h2>
        {contacts.length > 0 ? <ContactList /> : <p>No contacts available.</p>}
      </div>
    </div>
  );
}
