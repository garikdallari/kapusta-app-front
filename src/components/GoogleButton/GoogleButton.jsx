import { Button } from './GoogleButton.styled.jsx';

import { FcGoogle } from 'react-icons/fc';

export default function GoogleButton() {
  return (
    <>
      <form action="http://localhost:8000/api/auth/google">
        <Button type="submit">
          <FcGoogle />
          Google
        </Button>
      </form>
    </>
  );
}
