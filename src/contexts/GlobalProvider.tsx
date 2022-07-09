export interface GlobalProviderProps {
    children?: React.ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => (
    <>{children}</>
);
