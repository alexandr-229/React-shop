import { GootsItem } from './GootsItem';

export const GootsList = ({ goods = [], addToBasket = Function.prototype }) => {
    if (goods.length === 0) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className="goods">
            {goods.map((i) => (
                <GootsItem key={i.mainId} {...i} addToBasket={addToBasket} />
            ))}
        </div>
    );
};
