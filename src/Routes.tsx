import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import Home from '@/pages/Home';

export const Routes = () => {
    // const sIsLogin = localStorage.getItem("accessToken");
    // const sNavigate = useNavigate();

    return (
        <Switch>
            <Route path={'/'} element={<Home />} />
            <Route path={'/*'} element={<Navigate replace to="/" />} />
        </Switch>
    );
};
