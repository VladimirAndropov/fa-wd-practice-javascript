import React, { useState } from 'react';
import { Container, Typography, FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

function App() {
    const [checkedValues, setCheckedValues] = useState({});

    const handleCheckChange = (number) => {
        setCheckedValues({...checkedValues, [number]: !checkedValues[number]});
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Числа от 1 до 10
            </Typography>
            <FormControl component="fieldset">
                <FormGroup>
                    {[...Array(10).keys()].map((num) => (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkedValues[num + 1] || false}
                                    onChange={() => handleCheckChange(num + 1)}
                                    name={`number-${num + 1}`}
                                />
                            }
                            label={num + 1}
                            key={num}
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </Container>
    );
}

export default App;
