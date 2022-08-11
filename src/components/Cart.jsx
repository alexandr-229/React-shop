import { useContext } from 'react';
import { ShopContext } from '../context';

export const Cart = () => {
    const { handleBasketShow, order } = useContext(ShopContext);

    const quantity = order.length;

    return (
        <div
            className="cart blue darken-4 white-text"
            onClick={handleBasketShow}
        >
            <i className="material-icons">shopping_cart</i>
            {quantity === 0 ? null : (
                <span className="cart-quantity">{quantity}</span>
            )}
        </div>
    );
};
