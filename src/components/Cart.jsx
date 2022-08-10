export const Cart = ({
    quantity = 0,
    handleBasketShow = Function.prototype,
}) => {
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
