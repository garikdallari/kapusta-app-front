import React from 'react';
import { PaperContainer } from './Paper.styles';
import { theme } from '../../constants/theme';

function Paper({
  children,
  padding,
  borderRadius,
  boxShadow,
}) {
  return (
    <PaperContainer
      boxShadow={boxShadow}
      borderRadius={borderRadius}
      padding={padding}
      theme={theme.color.paperBgColor}
    >
      {children}
    </PaperContainer>
  );
}

export default Paper;
