import { useState } from 'react';
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
        </div>
    );
};
