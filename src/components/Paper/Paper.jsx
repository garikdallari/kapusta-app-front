import React from 'react';
import { PaperContainer } from './Paper.styles';
import { theme } from '../../constants/theme';

function Paper({ children, padding }) {
  return (
    <PaperContainer padding={padding} theme={theme.color.paperBgColor}>
      {children}
    </PaperContainer>
  );
}

export default Paper;
