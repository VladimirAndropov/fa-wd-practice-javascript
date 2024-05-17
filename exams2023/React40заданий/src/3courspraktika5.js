import React from 'react';
import { Paper, List, ListItem, ListItemText } from '@mui/material';

function App() {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // Добавьте больше элементов здесь, если нужно
    ];

    return (
        <div style={{ margin: '20px' }}>
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px' }}>
                <List>
                    {items.map((item) => (
                        <ListItem key={item.id}>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </div>
    );
}

export default App;
