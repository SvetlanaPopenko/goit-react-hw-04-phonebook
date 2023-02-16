import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import PropTypes from 'prop-types';
import {
  ContactFormWrap,
  ContactFormButton,
  ContactInput,
  ContactText,
  Error,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup.string().phone().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <ContactFormWrap autoComplete="off">
        <ContactText htmlFor="name">
          Name
          <ContactInput type="text" name="name" />
          <Error name="name" component="div" />
        </ContactText>
        <ContactText htmlFor="number">
          Number
          <ContactInput type="tel" name="number" placeholder="+380XXXXXXXXX"/>
          <Error name="number" component="div" />
        </ContactText>
        <ContactFormButton type="submit">Add contact</ContactFormButton>
      </ContactFormWrap>
    </Formik>
  );
};
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;