import React from 'react';
import { Input } from '@chakra-ui/react';

interface IInput {
  label: string;
  htmlFor: string;
  type: string;
  placeholder?: string;
}

function InputField({ label, htmlFor, type, placeholder }: IInput) {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <Input marginY={1} placeholder={placeholder} type={type} id={htmlFor} />
    </>
  )
}

export default React.memo(InputField);