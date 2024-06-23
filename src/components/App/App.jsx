import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  addContact as addContactOperation,
} from '../../redux/contactsOps';
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from '../../redux/contactsSlice';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (name, number) => {
    dispatch(addContactOperation({ name, number }));
  };

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList />
    </div>
  );
}
