import React from 'react';
import { Container, Paper, Typography } from '@mui/material';

const names = ['Елена', 'Андрей', 'Сергей', 'Ирина', 'Олег', 'Наталья', 'Дмитрий', 'Мария', 'Виктор', 'Ксения'];

function App() {
    const sortedNames = [...names].sort();

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
                <Typography variant="h1" gutterBottom>
                    Неупорядоченный список
                </Typography>
                {names.map((name, index) => (
                    <Typography key={index}>{`${name} ${index + 1}`}</Typography>
                ))}
            </Paper>

            <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, marginTop: 4 }}>
                <Typography variant="h1" gutterBottom>
                    Упорядоченный список
                </Typography>
                {sortedNames.map((name, index) => (
                    <Typography key={index}>{`${name} ${index + 1}`}</Typography>
                ))}
            </Paper>
        </Container>
    );
}

export default App;
