import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  main.AppContent {
    padding: 20px;
  }
`;

const Common: React.FC = ({ children }) => {
  return (
    <Container className="AppContainer">
      <Header />
      <main className="AppContent">{children}</main>
      <Footer />
    </Container>
  );
};

export default Common;
