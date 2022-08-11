import { useContext } from 'react';
import { ShopContext } from '../context';
import { GootsItem } from './GootsItem';

export const GootsList = () => {
    const { goods = [] } = useContext(ShopContext);

    if (goods.length === 0) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className="goods">
            {goods.map((i) => (
                <GootsItem key={i.mainId} {...i} />
            ))}
        </div>
    );
};
