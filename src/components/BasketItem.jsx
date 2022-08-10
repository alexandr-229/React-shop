export const BasketItem = ({
    displayName,
    finalPrice,
    mainId,
    quantity,
    removeFromBasket = Function.prototype,
    changeOrder = Function.prototype,
}) => {
    return (
        <li className="collection-item">
            {displayName} * {quantity} = {finalPrice * quantity}$
            <i
                onClick={() => changeOrder(mainId, 'decrement')}
                className="material-icons basket-quantity"
            >
                remove
            </i>
            <i
                onClick={() => changeOrder(mainId, 'increment')}
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
