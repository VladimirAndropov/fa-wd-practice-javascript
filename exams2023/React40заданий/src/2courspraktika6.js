import React, { useEffect } from 'react';
import { TextField, Container, Typography } from '@mui/material';

function SimpleFormWithDynamicTitle() {
    // Эффект для установки заголовка документа
    useEffect(() => {
        document.title = 'Новый заголовок вкладки';
    }, []); // Пустой массив зависимостей означает, что эффект выполнится один раз после монтирования компонента

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Заголовок
            </Typography>
            <TextField
                fullWidth
                multiline
                variant="outlined"
                value="Ваш текст здесь"
                InputProps={{
                    readOnly: true,
                }}
            />
        </Container>
    );
}

export default SimpleFormWithDynamicTitle;
