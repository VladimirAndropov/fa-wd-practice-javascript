import React from 'react';
import { Paper, Typography, Container } from '@mui/material';

function QuoteForm() {
    const longQuote = "В этом мире нет странного ничего. Есть только короткое зрение людей, которые не могут понять результата их деяний. — Леонардо да Винчи";
    const shortQuote = "Простота — залог надежности. — Леонардо да Винчи";

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px' }}>
                <Typography variant="h6" gutterBottom>
                    Длинная цитата:
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {longQuote}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Короткая цитата:
                </Typography>
                <Typography variant="body1">
                    {shortQuote}
                </Typography>
            </Paper>
        </Container>
    );
}

export default QuoteForm;
