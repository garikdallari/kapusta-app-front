import React from 'react';
import ContentLoader from 'react-content-loader';
import { WrapperLoader, BackGroundBody } from './Loader.styled';

const Loader = props => (
  <>
    <BackGroundBody>
      <WrapperLoader>
        <ContentLoader
          viewBox="0 0 400 160"
          height={100}
          width={400}
          backgroundColor="transparent"
          {...props}
        >
          <circle cx="150" cy="86" r="8" />
          <circle cx="194" cy="86" r="8" />
          <circle cx="238" cy="86" r="8" />
        </ContentLoader>
      </WrapperLoader>
    </BackGroundBody>
  </>
);

Loader.metadata = {
  name: 'RioF',
  github: 'clariokids',
  description: 'Three Dots',
  filename: 'ThreeDots',
};

export default Loader;
