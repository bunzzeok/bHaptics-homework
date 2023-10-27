import { BrowserRouter } from 'react-router-dom';
import { Routes } from '@/Routes';
import './App.css';
import Header from './components/header/Header';

const App = () => {
    return (
        <BrowserRouter basename="/">
            <Header></Header>
            <Routes />
        </BrowserRouter>
    );
};

export default App;
