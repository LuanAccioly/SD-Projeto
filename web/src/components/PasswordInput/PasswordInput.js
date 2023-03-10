import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import React from 'react';

export const PasswordInput= () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
        <FormControl>
        <FormLabel>Senha</FormLabel>
        <InputGroup size='md'>
            <Input
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'dcd' : 'Ver'}
            </Button>
            </InputRightElement>
        </InputGroup>
        </FormControl>
    )
  }