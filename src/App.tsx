import { Switchboard } from '@/routes/Switchboard';
import { GlobalProvider } from './contexts/GlobalProvider';

export const App = () => <GlobalProvider><Switchboard /></GlobalProvider>;