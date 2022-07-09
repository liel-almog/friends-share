import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelloWorld } from '@/components/HelloWorld';

export interface AuthenticatedRoutesProps {}

export const AuthenticatedRoutes: React.FC<AuthenticatedRoutesProps> = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HelloWorld />} />
        </Routes>
    </BrowserRouter>
);
