import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './hello-world.module.scss';

export const HelloWorld: React.FC = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div className={classes.container}>
            <h1>I ❤️ Google Cloud Provider</h1>
            <button
                className={classes.btn}
                onClick={() => setCounter(counter + 1)}
            >
                Click me
            </button>
            <p>You clicked {counter} times</p>
            <Link className={classes.link} to={'/login'}>
                Go To Login Page
            </Link>
        </div>
    );
};
