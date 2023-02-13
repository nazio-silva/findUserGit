import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';
import HomePage from './pages/Home';
import Modal from './components/Modal';

function App() {
  return (
    <Container maxWidth="xl">
      <HomePage />
      <Modal />
    </Container>
  );
}

export default App;
