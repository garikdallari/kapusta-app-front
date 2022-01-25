import { HashLoader } from 'react-spinners';
import { theme } from '../../constants/theme';
import { css } from '@emotion/react';

const stylesLoader = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animate-duration: 1.5s;
`;

export default function Loader() {
  return (
    <>
      <HashLoader
        color={theme.color.buttonOrangeBg}
        loading
        css={stylesLoader}
        size={100}
      />
    </>
  );
}
