import React from 'react';
import Logo from '../../components/Logo';
import styled from 'styled-components';
const Container = styled.View`
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
`
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
