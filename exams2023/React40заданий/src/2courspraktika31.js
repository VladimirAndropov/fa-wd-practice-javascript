import React from 'react';
import { Paper, Link } from '@mui/material';

function SearchLink() {
    return (
        <Paper elevation={3} style={{ borderRadius: '15px', padding: '10px' }}>
            <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <img src="https://ognistolici.ru/wp-content/uploads/2019/09/%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B6%D0%B5%D0%BB%D0%B0%D0%BD%D0%B8%D0%B9.jpg" alt="Search" style={{ width: '100%', borderRadius: '10px' }} />
            </Link>
        </Paper>
    );
}

export default SearchLink;
