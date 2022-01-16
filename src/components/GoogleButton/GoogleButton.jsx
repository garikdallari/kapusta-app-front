import { Button } from './GoogleButton.styled.jsx';

import { FcGoogle } from 'react-icons/fc';

export default function GoogleButton() {
  return (
    <>
      <Button type="submit">
        <FcGoogle />
        Google
      </Button>
    </>
  );
}
