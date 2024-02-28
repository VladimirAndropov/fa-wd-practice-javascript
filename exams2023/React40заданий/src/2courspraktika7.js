import * as React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-input': {
                        color: 'green', // Зеленый цвет текста
                    },
                    '& .MuiInputLabel-root': {
                        color: 'green', // Зеленый цвет лейбла
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderRadius: '15px', // Закругленные края
                        },
                    },
                },
            },
        },
    },
});

function NameForm() {
    return (
        <ThemeProvider theme={theme}>
            <Paper style={{ padding: '16px', margin: '16px', borderRadius: '15px' }}>
                <TextField
                    label="Ваше имя сюда"
                    defaultValue="Мельник Геннадий"
                    variant="outlined"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Paper>
        </ThemeProvider>
    );
}

export default NameForm;
