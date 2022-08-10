import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config.js';
import { Preloader } from './Preloader';
import { GootsList } from './GootsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList.jsx';
import { Alert } from './Alert';

export const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
        setAlertName(item.displayName);
    };

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((el) => el.mainId !== itemId);
        setOrder(newOrder);
    };

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

    const changeOrder = (id, action) => {
        const thisOrderIndex = order.findIndex((el) => el.mainId === id);
        if (thisOrderIndex < 0) {
            return;
        } else {
            const newOrder = order.map((item, index) => {
                if (index === thisOrderIndex) {
                    switch (action) {
                        case 'increment': {
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                            };
                        }
                        case 'decrement': {
                            return {
                                ...item,
                                quantity:
                                    item.quantity > 0 ? item.quantity - 1 : 0,
                            };
                        }
                        default: {
                            return item;
                        }
                    }
                } else {
                    return item;
                }
            });
            setOrder(newOrder);
        }
    };

    const closeAlert = () => {
        setAlertName('');
    };

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.shop) {
                    setGoods(data.shop);
                }
                setLoading(false);
            });
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? (
                <Preloader />
            ) : (
                <GootsList goods={goods} addToBasket={addToBasket} />
            )}
            {isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    changeOrder={changeOrder}
                />
            )}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </main>
    );
};
