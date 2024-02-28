import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const acronyms = [
    { acronym: 'NASA', fullForm: 'National Aeronautics and Space Administration' },
    { acronym: 'RADAR', fullForm: 'Radio Detection And Ranging' },
    { acronym: 'LASER', fullForm: 'Light Amplification by Stimulated Emission of Radiation' },
    { acronym: 'SCUBA', fullForm: 'Self-Contained Underwater Breathing Apparatus' },
    { acronym: 'SIM', fullForm: 'Subscriber Identity Module' },
    { acronym: 'PIN', fullForm: 'Personal Identification Number' },
    { acronym: 'HTML', fullForm: 'HyperText Markup Language' },
    { acronym: 'FAQ', fullForm: 'Frequently Asked Questions' },
    { acronym: 'CPU', fullForm: 'Central Processing Unit' },
    { acronym: 'RAM', fullForm: 'Random Access Memory' },
];

function AcronymList() {
    return (
        <Paper elevation={3} sx={{ padding: '20px', borderRadius: '15px' }}>
            {acronyms.map((item, index) => (
                <Box key={index} sx={{ marginBottom: '16px' }}>
                    <Typography variant="h6">{item.acronym}</Typography>
                    <Typography>{item.fullForm}</Typography>
                    {index < acronyms.length - 1 && <hr />}
                </Box>
            ))}
        </Paper>
    );
}

export default AcronymList;
