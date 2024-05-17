import React from 'react';
import { TextField, Button, Paper, Box } from '@mui/material';

function MyForm() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: '16px' }}>
                <form>
                    <TextField fullWidth label="Имя" margin="normal" />
                    <TextField fullWidth label="Фамилия" margin="normal" />
                    <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                        Отправить
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}

export default MyForm;
