import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Typography, Box, Paper } from '@mui/material';

function App() {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Это веб-страница
                    </Typography>
                    {/* Здесь могут быть другие элементы формы */}
                </Paper>
            </Box>

        </Container>
    );
}

export default App;
