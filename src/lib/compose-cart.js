/* @flow */
// $FlowFixMe
export const removeFromCart = (items, currentItems = []) => {
    return items.reduce((accumulator, item) => {
        if (item.quantity === Infinity) {
            return accumulator.filter(curItem => curItem.id !== item.id);
        }

        let quantity = item.quantity || 1;
  
        while (quantity > 0) {
            const index = accumulator.findIndex(curItem => curItem.id === item.id);
  
            if (index === -1) {
                break;
            }
  
            accumulator.splice(index, 1);
            quantity -= 1;
        }
  
        return accumulator;
    }, currentItems);
};
// $FlowFixMe
export const addToCart = (items, currentItems = []) => {
    return items.reduce((accumulator, item) => {
        if (item.quantity === Infinity) {
            throw new Error(`'Infinity' is not an accepted quantity for item: ${ item.id }`);
        }

        let quantity = item.quantity || 1;

        while (quantity > 0) {
            const newItem = { ...item };
            delete newItem.quantity;

            accumulator.push(newItem);
            quantity -= 1;
        }

        return accumulator;
    }, currentItems);
};