import React from 'react';
import ContentLoader from 'react-content-loader';
import { BackGroundBody } from './LoaderPage.styled';

const Loader = props => (
  <>
    <BackGroundBody>
      <ContentLoader
        viewBox="0 0 400 160"
        height={100}
        width={400}
        speed={1}
        backgroundColor="#fb7c2f"
        foregroundColor="#f5f6fb"
        {...props}
      >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
      </ContentLoader>
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
