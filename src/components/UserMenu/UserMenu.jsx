import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';
import { useNavigate } from 'react-router-dom';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut()).then(action => {
      if (logOut.fulfilled.match(action)) {
        navigate('/');
      } else {
        console.error('Logout failed:', action.error.message);
      }
    });
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
