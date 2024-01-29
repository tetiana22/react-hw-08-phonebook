import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Form, Input, Button } from './Form.styled';
import { getVisibleContacts } from 'components/redux/selectors';
import { addContact } from 'components/redux/thunk';

const FormAddContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };

    const isInContacts = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      toast.error(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));
    event.currentTarget.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          htmlFor={nanoid()}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Enter name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nanoid()}
          required
        />

        <Input
          htmlFor={nanoid()}
          type="tel"
          name="number"
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={nanoid()}
          required
        />

        <Button type="submit">Add Contact</Button>
      </Form>
    </>
  );
};

export default FormAddContact;
