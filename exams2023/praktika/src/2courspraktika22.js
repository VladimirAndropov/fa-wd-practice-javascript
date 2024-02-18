import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

function EnvelopeAddresses() {
    return (
        <Paper elevation={3} sx={{ padding: 2, borderRadius: '16px' }}>
            <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
                <Typography variant="body1">Отправитель:</Typography>
                <Typography variant="body2">Иван Иванов</Typography>
                <Typography variant="body2">Улица Пушкина, дом 10</Typography>
                <Typography variant="body2">Москва, 123456</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <div>
                    <Typography variant="body1" align="center">Получатель:</Typography>
                    <Typography variant="body2" align="center">Мария Смирнова</Typography>
                    <Typography variant="body2" align="center">Пр. Ленина, дом 20, кв. 30</Typography>
                    <Typography variant="body2" align="center">Санкт-Петербург, 654321</Typography>
                </div>
            </Box>
        </Paper>
    );
}

export default EnvelopeAddresses;
