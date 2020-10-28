import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { Method } from '../HTTPMethodBadge/index';
import { Container } from './styles';

interface Props {
  label: string;
  description?: string;
  Icon?: IconType;
  HTTPMethod?: React.FC<{ method: Method }>;
  method?: Method;
  defaultExpanded?: boolean;
}

const Accordion: React.FC<Props> = ({
  label,
  Icon,
  HTTPMethod,
  description,
  method,
  defaultExpanded,
  children,
}) => {
  const [open, setOpen] = useState(!!defaultExpanded);

  function toggleAccordion() {
    setOpen(!open);
  }

  return (
    <Container open={open}>
      <button onClick={toggleAccordion}>
        <div className="left">
          {Icon && <Icon size={28} />}
          {HTTPMethod && <HTTPMethod method={method || 'GET'} />}
          <strong>{label}</strong>
          <span>{description || ''}</span>
        </div>
        {!open ? <FaArrowUp /> : <FaArrowDown />}
      </button>
      <main>{children}</main>
    </Container>
  );
};

export default Accordion;
