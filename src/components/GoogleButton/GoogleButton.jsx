import { Button } from './GoogleButton.styled.jsx';

import { FcGoogle } from 'react-icons/fc';

export default function GoogleButton() {
  return (
    <>
      <form action="http://ec2-3-70-225-32.eu-central-1.compute.amazonaws.com:5555/api/auth/google">
        <Button type="submit">
          <FcGoogle />
          Google
        </Button>
      </form>
    </>
  );
}
