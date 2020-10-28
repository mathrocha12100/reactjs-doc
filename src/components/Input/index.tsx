import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { InputContainer } from './styles';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  borderColor?: string;
  labelColor?: string;
}

const Input: React.FC<Props> = ({
  name,
  label,
  borderColor,
  labelColor,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer
      labelColor={labelColor}
      borderColor={borderColor}
    >
      <span className="input input--hoshi">
        <input
          className="input__field input__field--hoshi"
          type="text"
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />

        <label className="input__label input__label--hoshi input__label--hoshi-color-1">
          <span className="input__label-content input__label-content--hoshi">
            {label}
          </span>
        </label>
      </span>
    </InputContainer>
  );
};

export default Input;
