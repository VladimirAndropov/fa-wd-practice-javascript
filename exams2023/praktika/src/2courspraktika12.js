import React from 'react';
import { Paper, Typography } from '@mui/material';

function App() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px' }}>
                <Typography variant="h1">G</Typography>
                <Typography variant="h2">e</Typography>
                <Typography variant="h3">n</Typography>
                <Typography variant="h4">a</Typography>
            </Paper>
        </div>
    );
}

export default App;
