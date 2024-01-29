import React from 'react';
import { logOut } from 'components/redux/Authorization/authThunk';
import { useDispatch, useSelector } from 'react-redux';
import { Wrap, Span, Link, Button } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth.user);

  return (
    <Wrap>
      <nav>
        <Link to="/contacts">Contacts</Link>
      </nav>
      <Span>Welcome {name} </Span>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Wrap>
  );
};

export default UserMenu;
