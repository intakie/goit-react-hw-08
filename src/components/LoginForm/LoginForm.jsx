import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(login(values)).then(action => {
      if (login.fulfilled.match(action)) {
        navigate('/');
      } else {
        console.error('Login failed:', action.error.message);
      }
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
