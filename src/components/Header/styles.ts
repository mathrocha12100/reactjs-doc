import styled from 'styled-components';

export const Container = styled.div`
  height: 8vh;
  background: ${(props) => props.theme.header.primary};
  color: ${(props) => props.theme.header.text};


  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
`;
