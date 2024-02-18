// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Paper, Button } from "@mui/material";

const HomePage = () => (
    <Container>
        <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px' }}>
            <h1>Домашняя страница</h1>
            <Link to="/form"><Button variant="contained">Перейти к форме</Button></Link>
        </Paper>
    </Container>
);

const FormPage = () => (
    <Container>
        <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px' }}>
            <h1>Форма</h1>
            {/* Здесь может быть ваша форма */}
        </Paper>
    </Container>
);

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
        </Routes>
    </Router>
);

export default App;
