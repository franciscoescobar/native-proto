import React from 'react';
import Logo from '../../components/Logo';
import {Container} from './styled';
const Home: () => React$Node = () => {
  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>
    </>
  );
};

export default Home;
