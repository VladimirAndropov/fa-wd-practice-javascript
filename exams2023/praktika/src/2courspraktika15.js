import React from 'react';
import { Paper, Typography } from '@mui/material';

const MyForm = () => {
    return (
        <Paper style={{ padding: 20, borderRadius: '15px' }}>
            <Typography variant="body1">
                &nbsp;&nbsp;&nbsp;Это первый абзац текста с отступом. Здесь могла бы быть ваша информация, описание, или любой другой текст.
            </Typography>
            <Typography variant="body1" style={{ marginTop: 16 }}>
                &nbsp;&nbsp;&nbsp;Это второй абзац текста с отступом. Продолжение текста, дополнительные детали или другой контент.
            </Typography>
        </Paper>
    );
};

export default MyForm;
