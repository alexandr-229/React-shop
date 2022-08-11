import { useContext } from 'react';
import { ShopContext } from '../context';

export const BasketItem = ({ displayName, finalPrice, mainId, quantity }) => {
    const { removeFromBasket, incrementQuantity, decrementQuantity } =
        useContext(ShopContext);
    return (
        <li className="collection-item">
            {displayName} * {quantity} = {finalPrice * quantity}$
            <i
                onClick={() => decrementQuantity(mainId)}
                className="material-icons basket-quantity"
            >
                remove
            </i>
            <i
                onClick={() => incrementQuantity(mainId)}
                className="material-icons basket-quantity"
            >
                add
            </i>
            <span
                className="secondary-content"
                onClick={() => removeFromBasket(mainId)}
            >
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    );
};
