import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const phoneNumberId = useId();
  const initialValues = {
    name: "",
    number: "",
  };
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Toshort!")
      .max(50, "Too long!")
      .required("Requared"),
    number: Yup.string()
      .min(3, "Toshort!")
      .max(50, "Too long!")
      .required("Requared"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.conteiner}>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.input} type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.conteiner}>
          <label htmlFor={phoneNumberId}>Number</label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={phoneNumberId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <div>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
