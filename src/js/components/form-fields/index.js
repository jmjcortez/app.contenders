import React from 'react';
import { Form } from 'react-bootstrap'; 

export const FieldInput = ({ input, type }) => {
    return (
        <Form.Control
            type={type}
            value={input.value}
            onChange={input.onChange} />
    )
}

