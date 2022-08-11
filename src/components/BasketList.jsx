import { BasketItem } from './BasketItem';
import { useContext } from 'react';
import { ShopContext } from '../context';

export const BasketList = () => {
    const { order, handleBasketShow } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.finalPrice * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Basket</li>
            {order.length ? (
                order.map((item) => <BasketItem key={item.mainId} {...item} />)
            ) : (
                <li className="collection-item">Cart is empty</li>
            )}
            <li className="collection-item active">
                Total cost: {totalPrice}$
            </li>
            <li className="collection-item active">
                <button className="btn-small">Design</button>
            </li>
            <i
                className="material-icons basket-close"
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
};
