import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from '@/Routes';
import './App.css';

const App = () => {
    return (
        <RecoilRoot>
            <BrowserRouter basename="/">
                <Routes />
            </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;
