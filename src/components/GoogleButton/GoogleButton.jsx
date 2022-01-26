import { Button } from './GoogleButton.styled.jsx';

import { FcGoogle } from 'react-icons/fc';

export default function GoogleButton() {
  return (
    <>
      <form action="https://kapusta-33-5-api.herokuapp.com/api/auth/google">
        <Button type="submit">
          <FcGoogle />
          Google
        </Button>
      </form>
    </>
  );
}
