import React from 'react';
import { TextField, Container } from '@mui/material';

function SimpleForm() {
    return (
        <Container maxWidth="sm">
            <TextField
                fullWidth
                multiline
                variant="outlined"
                value="Текст по тз"
                InputProps={{
                    readOnly: true,
                }}
            />
        </Container>
    );
}

export default SimpleForm;
