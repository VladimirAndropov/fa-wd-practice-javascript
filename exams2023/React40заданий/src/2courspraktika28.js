import React from 'react';
import { Box, Button, Container, Paper, Typography } from '@mui/material';

const ScrollLinkPage = () => {
    // Создаем массив параграфов для демонстрации прокрутки
    const paragraphs = new Array(20).fill('Этот текст для демонстрации прокрутки страницы.');

    return (
        <Container>
            <Box sx={{ my: 2 }} id="top">
                <Button variant="contained" href="#bottom">Перейти вниз</Button>
            </Box>

            <Paper elevation={3} sx={{ p: 2, borderRadius: '10px' }}>
                {paragraphs.map((text, index) => (
                    <Typography key={index} paragraph>
                        {text}
                    </Typography>
                ))}
            </Paper>

            <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }} id="bottom">
                <Button variant="contained" href="#top">Вернуться наверх</Button>
            </Box>
        </Container>
    );
};

export default ScrollLinkPage;
