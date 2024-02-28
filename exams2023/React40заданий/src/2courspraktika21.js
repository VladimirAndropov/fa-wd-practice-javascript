import React from 'react';
import { Paper, List, ListItem, ListItemText, Container } from '@mui/material';

const DefinitionsList = () => {
    const definitions = [
        "Определение 1",
        "Определение 2",
        "Определение 3",
        "Определение 4",
        "Определение 5",
    ];

    return (
        <Container>
            <Paper elevation={3} style={{ borderRadius: '15px', padding: '20px' }}>
                <List>
                    {definitions.map((definition, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={definition} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
};

export default DefinitionsList;
