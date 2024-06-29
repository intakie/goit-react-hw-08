import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  name: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters long')
    .required('Password is required'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(register(values)).then(action => {
      if (register.fulfilled.match(action)) {
        navigate('/');
      } else {
        console.error('Registration failed:', action.error.message);
      }
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
