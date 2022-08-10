export const GootsItem = ({
    mainId,
    displayName,
    displayDescription,
    price: { finalPrice },
    displayAssets,
    addToBasket = Function.prototype,
}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt={displayName} />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() =>
                        addToBasket({
                            mainId,
                            displayName,
                            finalPrice,
                        })
                    }
                >
                    Buy
                </button>
                <span className="right">{finalPrice}$</span>
            </div>
        </div>
    );
};
