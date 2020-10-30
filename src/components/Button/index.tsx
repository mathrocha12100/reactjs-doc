import React from 'react';

import { ButtonContainer, Loading } from './styles';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  backgroundColor: string;
  textColor: string;
  Icon?: any;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<Props> = ({
  label,
  backgroundColor,
  textColor,
  disabled,
  Icon,
  loading,
  ...rest
}) => {
  return (
    <ButtonContainer
      disabled={disabled || loading}
      customStyles={{
        backgroundColor,
        textColor,
      }}
      {...rest}
    >
      {loading && <Loading  />}
      {!loading && Icon && Icon}
      {!loading && label}
    </ButtonContainer>
  );
};

export default Button;
