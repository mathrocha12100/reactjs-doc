import React from 'react';
import { Container } from './styles';
import { FaGithub } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <Container>
      <strong>Desenvolvido por Matheus Rocha</strong>
      <a href="https://github.com/mathrocha12100">
        <FaGithub size={28} />
      </a>
    </Container>
  );
}

export default Footer;