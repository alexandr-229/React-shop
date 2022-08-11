import { useEffect, useContext } from 'react';
import { API_URL, API_KEY } from '../config.js';
import { Preloader } from './Preloader';
import { GootsList } from './GootsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList.jsx';
import { Alert } from './Alert';
import { ShopContext } from '../context.js';

export const Shop = () => {
    const { setGoods, order, loading, isBasketShow, alertName } =
        useContext(ShopContext);

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setGoods(data.shop);
            });
        //eslint-disable-next-line
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GootsList />}
            {isBasketShow && <BasketList />}
            {alertName && <Alert />}
        </main>
    );
};
