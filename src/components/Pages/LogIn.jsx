import { logIn } from 'components/redux/Authorization/authThunk';
import { toast } from 'react-toastify';
import { Form, Input, Text, Button } from './RegistrationPage.styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    dispatch(logIn(user))
      .then(navigate('/'))
      .catch(() => {
        toast.error('error');
      });
    e.currentTarget.reset();
  };
  return (
    <>
      <Text>Log in </Text>
      <Form onSubmit={handleSubmit}>
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
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
          required
        />
        <Button type="submit">Log in</Button>
      </Form>
    </>
  );
};

export default LogIn;
