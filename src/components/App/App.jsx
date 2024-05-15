import Title from "../Title/Title";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Layout from "../Layout/Layout";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import {
  selectLoading,
  selectError,
  selectContacts,
} from "../../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Title text="Phonebook" />
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <Error />}
      {!isError && !isLoading && contacts.length > 0 && <ContactList />}
    </Layout>
  );
}
