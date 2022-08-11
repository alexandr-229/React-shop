import { useEffect } from 'react';
import { ShopContext } from '../context';
import { useContext } from 'react';

export const Alert = () => {
    const { alertName = '', closeAlert = Function.prototype } =
        useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
        //eslint-disable-next-line
    }, [alertName]);

    return (
        <div id="toast-container">
            <div className="toast">{alertName} added to cart</div>
        </div>
    );
};
