import React from 'react';
import { Container } from './styles';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Dialog: React.FC<Props> = ({ children, open }) => {
  return (
    <Container onKeyPress={() => console.log('testre')} open={open}>
      <main>{children}</main>
    </Container>
  );
};

export default Dialog;
