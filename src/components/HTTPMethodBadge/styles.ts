import styled from 'styled-components';
import { colorIsTooLight } from '../../functions/stringFunctions';

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.color};
  color: ${(props) => props.theme.body.text};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  width: 110px;

  font-weight: bold;
  color: ${(props) => colorIsTooLight(props.color) ? '#333' : '#fff'};
`;
