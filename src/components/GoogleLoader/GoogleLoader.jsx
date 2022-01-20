import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux/auth/auth-operations';
import { setTokenToState } from '../../redux/auth/auth-slice';
import authSelectors from '../../redux/auth/auth-selectors';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const GoogleLoader = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(query.get('token'));
  }, [query]);

  useEffect(() => {
    dispatch(setTokenToState(token));
  }, [dispatch, token]);

  // Вызвать getCurrent из редьюсера
  // Отправить на главную страницу

  return (
    <>
      <h1>Загрузка</h1>
      {/*<p>token={token}</p>*/}
    </>
  );
};

export default GoogleLoader;
