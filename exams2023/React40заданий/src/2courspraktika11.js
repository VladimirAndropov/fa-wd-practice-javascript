import React from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const BookDescription = styled(Typography)({
    '& u': { // Подчеркивание для названий и авторов
        textDecoration: 'underline',
    },
    '& em': { // Курсив и жирный шрифт для прилагательных
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
});

function BookParagraph() {
    return (
        <Paper elevation={3} style={{ margin: '20px', padding: '20px', borderRadius: '15px' }}>
            <BookDescription variant="body1">
                В книге <u>«Великие приключения»</u> автора <u>Алексея Иванова</u>, читатели погружаются
                в <em>увлекательный</em> и <em>динамичный</em> мир исследований и открытий.
            </BookDescription>
        </Paper>
    );
}

export default BookParagraph;
