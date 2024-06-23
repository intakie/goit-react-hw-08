import { useDispatch } from 'react-redux';
import { deleteContact as deleteContactOperation } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactOperation(id));
  };

  return (
    <li className={css.item}>
      <p>
        {name}: {number}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
