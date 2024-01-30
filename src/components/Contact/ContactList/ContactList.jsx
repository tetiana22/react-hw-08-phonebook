import { useDispatch, useSelector } from 'react-redux';
import {
  ListOfContact,
  ContactItem,
  Text,
  Spinner,
} from './ContactList.styled';
import {
  selectIsLoading,
  selectError,
  getVisibleContacts,
} from 'components/redux/Contact/selectors';
import { deleteContact } from 'components/redux/Contact/thunk';
import { toast } from 'react-toastify';

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id))
      .then(() => {
        toast.success('Contact successfully deleted');
      })
      .catch(() => {
        toast.error('error');
      });
  };
  return (
    <>
      {isLoading && <Spinner />}
      {error && <Text>{error}</Text>}
      <ListOfContact>
        {contacts.map(contact => (
          <ContactItem key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => {
                handleDelete(contact.id);
              }}
            >
              Delete
            </button>
          </ContactItem>
        ))}
      </ListOfContact>
    </>
  );
};

export default ContactsList;
