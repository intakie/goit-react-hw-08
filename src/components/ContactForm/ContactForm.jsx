import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact as addContactOperation } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContactOperation(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" component="span" className={css.error} />
        <label htmlFor="number">Number</label>
        <Field name="number" type="text" />
        <ErrorMessage name="number" component="span" className={css.error} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
