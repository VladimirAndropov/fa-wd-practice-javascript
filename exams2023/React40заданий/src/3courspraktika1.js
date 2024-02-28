import React, { useState } from 'react';
import { Container, Paper, TextField, Button } from '@mui/material';

const ParentComponent = () => {
    const someData = "Пример данных";

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px' }}>
                <ChildComponent data={someData} />
            </Paper>
        </Container>
    );
};

const ChildComponent = ({ data }) => {
    const [inputData, setInputData] = useState(data);
    const [outputData, setOutputData] = useState('');

    const handleSubmit = () => {
        setOutputData(inputData);
    };

    return (
        <>
            <TextField
                fullWidth
                label="Данные из родительского компонента"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Отправить
            </Button>
            <TextField
                fullWidth
                label="Полученные данные"
                value={outputData}
                margin="normal"
                InputProps={{
                    readOnly: true,
                }}
            />
        </>
    );
};

export default ParentComponent;
