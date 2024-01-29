import { Container, Wrapper } from '../App.styled';
import ContactsList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/thunk';
import FormAddContact from 'components/Form/Form';
import { Section } from '../Section/Section';
import Filter from 'components/Filter/Filter';

const ContactPages = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Section title="Phonebook">
        <FormAddContact />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <Filter />
        ) : (
          <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
        )}
        {contacts.length > 0 && <ContactsList />}
      </Section>
    </Container>
  );
};
export default ContactPages;
