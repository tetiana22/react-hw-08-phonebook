import { Container, Wrapper } from '../../App/App.styled';
import ContactsList from '../Contact/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/Contact/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/Contact/thunk';
import FormAddContact from 'components/Contact/Form/Form';
import { Section } from '../Section/Section';
import Filter from 'components/Contact/Filter/Filter';

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
