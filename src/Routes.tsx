import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import Compatibility from './pages/compatibility/Compatibility';

export const Routes = () => {
    return (
        <Switch>
            <Route path={'/compatibility'} element={<Compatibility />} />
            <Route path={'/*'} element={<Navigate replace to="/Compatibility" />} />
        </Switch>
    );
};
