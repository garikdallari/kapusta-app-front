import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({
  children,
  redirectTo = '/signin',
  ...routeProps
}) {
  return (
    <Route {...routeProps}>
      <Redirect to={redirectTo} />
    </Route>
  );
}
