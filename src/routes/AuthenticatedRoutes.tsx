import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelloWorld } from '@/components/HelloWorld';
import { Login } from '@/components/Login';

export interface AuthenticatedRoutesProps {}

export const AuthenticatedRoutes: React.FC<AuthenticatedRoutesProps> = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HelloWorld />} />
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
);
