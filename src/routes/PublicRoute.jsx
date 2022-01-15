import { Route, Redirect } from 'react-router-dom';

export default function PublicRoute({
  children,
  redirectTo = '/home',
  restricted = false,
  ...routeProps
}) {
  return (
    <Route {...routeProps}>
      <Redirect to={redirectTo} />
    </Route>
  );
}
