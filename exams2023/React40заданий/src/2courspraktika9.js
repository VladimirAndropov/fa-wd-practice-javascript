import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)({
    padding: '20px',
    borderRadius: '15px',
});

const StyledTextField = styled(TextField)({
    '& .MuiInputBase-input': {
        fontFamily: 'Tahoma',
    },
});

function App() {
    return (
        <StyledPaper elevation={3}>
            <StyledTextField
                label="Ваше имя сюда"
                defaultValue="Гена"
                variant="outlined"
                fullWidth
            />
        </StyledPaper>
    );
}

export default App;
