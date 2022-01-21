import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux/auth/auth-operations';
import { setTokenToState } from '../../redux/auth/auth-slice';
import authSelectors from '../../redux/auth/auth-selectors';
import Container from '../Container/Container';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const GoogleLoader = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const storedToken = useSelector(authSelectors.getToken);
  const [token, setToken] = useState(null);
  const history = useHistory();

  useEffect(() => {
    setToken(query.get('token'));
  }, [query]);

  useEffect(() => {
    dispatch(setTokenToState(token));
  }, [dispatch, token]);

  useEffect(() => {
    if (storedToken) {
      console.log(storedToken);
      dispatch(authOperations.getCurrentUser());
    }
  }, [dispatch, history, storedToken]);

  return (
    <>
      <Container>
        <p>Loading...</p>
      </Container>
    </>
  );
};

export default GoogleLoader;
