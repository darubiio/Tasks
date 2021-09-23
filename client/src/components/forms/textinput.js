import React, { useState } from 'react';
import { useField } from "formik";
import { Input, Text, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';

export const TextInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  const eye = () => {
    return (
      <>
        {props.eye ?
          <InputRightElement
            onClick={e => {
              e.preventDefault()
              console.log('aquitamo')
            }}
            fontSize="1.2em"
            children={<i className='bi bi-eye' />}
          /> : ''}
      </>
    )
  }

  const [eyes, seteyes] = useState('');

  return (
    <>
      {meta.touched && meta.error ? (
        <Text fontSize="xs" color='red.300' >{meta.error}</Text>
      ) : null}
      <InputGroup mb={props.mbn}>
        <InputLeftElement
          pointerEvents="none"
          fontSize="1.2em"
          children={<i className={props.ico} />}
        />
        {eyes}
        <Input
          onFocus={e => seteyes(eye)}
          
          errorBorderColor="red.300"
          {...field} {...props} />
      </InputGroup>
    </>
  );
};