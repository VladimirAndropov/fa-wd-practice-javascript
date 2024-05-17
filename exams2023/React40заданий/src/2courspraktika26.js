import React, { useRef } from 'react';
import { Button, Paper, Box, Typography } from '@mui/material';

function ScrollToBottomPage() {
    const bottomRef = useRef(null);

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <Box sx={{ p: 2 }}>
                <Paper elevation={3} sx={{ p: 2, borderRadius: '16px' }}>
                    <Button variant="contained" onClick={scrollToBottom}>
                        Перейти вниз страницы
                    </Button>
                </Paper>
            </Box>
            {/* Контент страницы */}
            <div style={{ height: '1500px' }}></div>
            {/* Элемент в нижней части страницы */}
            <div ref={bottomRef}>
                <Typography variant="h6" align="center">
                    Вы внизу страницы
                </Typography>
            </div>
        </div>
    );
}

export default ScrollToBottomPage;
