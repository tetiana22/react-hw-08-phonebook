import { register } from 'components/redux/Authorization/authThunk';
import { Form, Input, Text, Button } from './RegistrationPage.styled';
import { useDispatch } from 'react-redux';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    dispatch(register(newUser));

    e.currentTarget.reset();
  };
  return (
    <>
      <Text>Registration </Text>
      <Form onSubmit={handleSubmit}>
        <Input
          type="name"
          name="name"
          placeholder="Enter your name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Please enter a valid email address"
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default RegistrationPage;
