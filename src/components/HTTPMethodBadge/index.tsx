import React from 'react';
import { methodColor } from './functions';
import { Container } from './styles';

export type Method = 'POST' | 'GET' | 'PUT' | 'DELETE';

interface Props {
  method: Method;
}

const HTTPMethod: React.FC<Props> = ({ method }) => {
  return <Container color={methodColor(method)}>{method}</Container>;
};

export default HTTPMethod;
