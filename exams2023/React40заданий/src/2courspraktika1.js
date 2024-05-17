/*Создайте веб-страницу, на которой ваше имя будет выводиться на экран.*/
// 2courspraktika1.js
// 2courspraktika1.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)({
    backgroundColor: '#90caf9', // голубой цвет
    padding: '20px',
    borderRadius: '15px', // закругленные углы
});

function App() {
    return (
        <StyledPaper elevation={3}>
            <Typography variant="h4" component="h1">
                Мельник Геннадий
            </Typography>
        </StyledPaper>
    );
}

export default App;


