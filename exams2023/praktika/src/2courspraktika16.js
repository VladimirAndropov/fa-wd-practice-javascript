import React from 'react';
import { Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

function MyLists() {
    const orderedListItems = ["Первый элемент", "Второй элемент", "Третий элемент"];
    const unorderedListItems = ["Яблоко", "Банан", "Апельсин"];

    return (
        <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px' }}>
            <List component="nav" aria-label="Упорядоченный список">
                {orderedListItems.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={`${index + 1}. ${item}`} />
                    </ListItem>
                ))}
            </List>
            <Divider variant="middle" />
            <List component="nav" aria-label="Неупорядоченный список">
                {unorderedListItems.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default MyLists;
