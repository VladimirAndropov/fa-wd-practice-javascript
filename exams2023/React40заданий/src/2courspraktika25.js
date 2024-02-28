import React from 'react';
import { Paper, Link, Typography } from '@mui/material';

const MyLinks = () => {
    return (
        <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px' }}>
            <Typography variant="h6">Полезные ссылки:</Typography>
            <Link href="https://site1.com" target="_blank" rel="noopener noreferrer">Сайт 1</Link><br />
            <Link href="https://site2.com" target="_blank" rel="noopener noreferrer">Сайт 2</Link><br />
            <Link href="https://site3.com" target="_blank" rel="noopener noreferrer">Сайт 3</Link><br />
            <Link href="https://site4.com" target="_blank" rel="noopener noreferrer">Сайт 4</Link><br />
            <Link href="https://site5.com" target="_blank" rel="noopener noreferrer">Сайт 5</Link>
        </Paper>
    );
};

export default MyLinks;
