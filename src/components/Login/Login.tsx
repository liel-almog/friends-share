import classes from './login.module.scss';

export interface LoginProps {}

export const Login: React.VFC<LoginProps> = () => {
    return (
        <div className={classes.container}>
            <h1>Login</h1>
        </div>
    );
};
