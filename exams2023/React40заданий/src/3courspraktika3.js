import React, { useState } from 'react';
import { Button, Paper, Box } from '@mui/material';

function MyComponent() {
    const [count, setCount] = useState(0);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            <Paper elevation={3} sx={{ padding: 2, borderRadius: '16px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p>Вы нажали {count} раз</p>
                    <Button variant="contained" onClick={() => setCount(count + 1)}>
                        Нажми на меня
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default MyComponent;
