import { FC } from 'react';
import { AuthenticatedRoutes } from './AuthenticatedRoutes';

export interface SwitchboardProps {}

export const Switchboard: FC<SwitchboardProps> = () => <AuthenticatedRoutes />;
