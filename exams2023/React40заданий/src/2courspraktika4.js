import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Paper, Typography } from '@mui/material';

class App extends React.Component {
    componentDidMount() {
        document.title = new Date().toLocaleDateString();
    }

    render() {
        return (
            <Container maxWidth="sm">
                <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                    <Typography variant="h5">
                        Когда была создана эта веб-страница? Проверьте заголовок страницы для ответа.
                    </Typography>
                </Paper>
            </Container>
        );
    }
}

export default App;
