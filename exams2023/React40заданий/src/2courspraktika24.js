import React from 'react';
import { Paper, List, ListItem, ListItemText, Link } from '@mui/material';

function SearchEngines() {
    return (
        <Paper style={{ margin: 20, padding: 20, borderRadius: 10 }}>
            <List>
                <ListItem>
                    <ListItemText>
                        <Link href="https://www.google.com" target="_blank" rel="noopener">
                            Google
                        </Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link href="https://www.yahoo.com" target="_blank" rel="noopener">
                            Yahoo
                        </Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link href="https://www.altavista.com" target="_blank" rel="noopener">
                            AltaVista
                        </Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Link href="https://www.lycos.com" target="_blank" rel="noopener">
                            Lycos
                        </Link>
                    </ListItemText>
                </ListItem>

            </List>
        </Paper>
    );
}

export default SearchEngines;
