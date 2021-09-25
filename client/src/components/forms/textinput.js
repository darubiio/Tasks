import React from 'react';
import { useField } from "formik";
import { Input, Text, InputGroup, InputLeftElement } from '@chakra-ui/react';

export const TextInput = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      {meta.touched && meta.error ? (
          <Text fontSize="xs" color='red.300'>😕 {meta.error}</Text>
      ) : null}

      <InputGroup mb={props.mbn}>
        <InputLeftElement
          pointerEvents="none"
          fontSize="1.2em"
          children={<i className={props.ico} />}
        />
        
        <Input
          type={!props.psw ? 'text' : 'password'}
          errorBorderColor="red.300"
          {...field} {...props} />
      </InputGroup>
    </>
  );
};