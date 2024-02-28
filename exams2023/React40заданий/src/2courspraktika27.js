import React, { useState } from 'react';
import { Button, Box, Paper, Container, Snackbar, Typography  } from '@mui/material';

const ScrollToTopAndBottom = () => {
    const [showTopMessage, setShowTopMessage] = useState(false);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setShowTopMessage(true);
    };

    return (
        <Container>
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                {/* Ваш контент здесь */}

                {/* Кнопка для скроллинга вниз */}
                <Paper elevation={3} sx={{ p: 2, borderRadius: '16px', mb: 2 }}>
                    <Button variant="contained" onClick={scrollToBottom}>
                        Вниз
                    </Button>
                </Paper>

                {/* Ваш контент здесь (для демонстрации прокрутки) */}
                <Paper id="section1" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 1</Typography>
                    <Typography>Содержимое раздела 1...</Typography>
                </Paper>
                <Paper id="section2" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 2</Typography>
                    <Typography>Содержимое раздела 2...</Typography>
                </Paper>
                <Paper id="section3" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 3</Typography>
                    <Typography>Содержимое раздела 3...</Typography>
                </Paper>
                <Paper id="section1" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 1</Typography>
                    <Typography>Содержимое раздела 1...</Typography>
                </Paper>
                <Paper id="section2" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 2</Typography>
                    <Typography>Содержимое раздела 2...</Typography>
                </Paper>
                <Paper id="section3" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 3</Typography>
                    <Typography>Содержимое раздела 3...</Typography>
                </Paper>
                <Paper id="section1" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 1</Typography>
                    <Typography>Содержимое раздела 1...</Typography>
                </Paper>
                <Paper id="section2" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 2</Typography>
                    <Typography>Содержимое раздела 2...</Typography>
                </Paper>
                <Paper id="section3" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 3</Typography>
                    <Typography>Содержимое раздела 3...</Typography>
                </Paper>
                <Paper id="section1" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 1</Typography>
                    <Typography>Содержимое раздела 1...</Typography>
                </Paper>
                <Paper id="section2" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 2</Typography>
                    <Typography>Содержимое раздела 2...</Typography>
                </Paper>
                <Paper id="section3" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 3</Typography>
                    <Typography>Содержимое раздела 3...</Typography>
                </Paper>
                <Paper id="section1" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 1</Typography>
                    <Typography>Содержимое раздела 1...</Typography>
                </Paper>
                <Paper id="section2" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 2</Typography>
                    <Typography>Содержимое раздела 2...</Typography>
                </Paper>
                <Paper id="section3" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 3</Typography>
                    <Typography>Содержимое раздела 3...</Typography>
                </Paper>
                <Paper id="section1" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 1</Typography>
                    <Typography>Содержимое раздела 1...</Typography>
                </Paper>
                <Paper id="section2" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 2</Typography>
                    <Typography>Содержимое раздела 2...</Typography>
                </Paper>
                <Paper id="section3" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 3</Typography>
                    <Typography>Содержимое раздела 3...</Typography>
                </Paper>
                <Paper id="section1" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 1</Typography>
                    <Typography>Содержимое раздела 1...</Typography>
                </Paper>
                <Paper id="section2" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 2</Typography>
                    <Typography>Содержимое раздела 2...</Typography>
                </Paper>
                <Paper id="section3" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 3</Typography>
                    <Typography>Содержимое раздела 3...</Typography>
                </Paper>
                <Paper id="section1" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 1</Typography>
                    <Typography>Содержимое раздела 1...</Typography>
                </Paper>
                <Paper id="section2" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 2</Typography>
                    <Typography>Содержимое раздела 2...</Typography>
                </Paper>
                <Paper id="section3" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 3</Typography>
                    <Typography>Содержимое раздела 3...</Typography>
                </Paper>
                <Paper id="section1" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 1</Typography>
                    <Typography>Содержимое раздела 1...</Typography>
                </Paper>
                <Paper id="section2" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 2</Typography>
                    <Typography>Содержимое раздела 2...</Typography>
                </Paper>
                <Paper id="section3" sx={{ p: 2, borderRadius: '16px' }}>
                    <Typography variant="h6">Раздел 3</Typography>
                    <Typography>Содержимое раздела 3...</Typography>
                </Paper>


                {/* Кнопка для скроллинга вверх */}
                <Paper elevation={3} sx={{ p: 2, borderRadius: '16px', mt: 2 }}>
                    <Button variant="contained" onClick={scrollToTop}>
                        Наверх
                    </Button>
                </Paper>

                {/* Сообщение о том, что пользователь находится вверху */}
                <Snackbar
                    open={showTopMessage}
                    autoHideDuration={3000}
                    onClose={() => setShowTopMessage(false)}
                    message="Вы вверху"
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                />
            </Box>
        </Container>
    );
};

export default ScrollToTopAndBottom;
