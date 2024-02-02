import React, { useState, useMemo, useEffect } from 'react';
import { useReducer } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);

    // Your code starts here

    const calculateTotalValue = (items) => {
        return items.reduce((total, item) => total + item.value, 0);
    };

    const totalValue = useMemo(() => {
        // let val = 0;
        // for(let i=0; i<items.length; i++) {
        //     val += items[i].value;
        // }
        // return val;

        return calculateTotalValue(items);
    }, [items]);

    // Using Reducer 👇 
    const reducer = (state, action) => { // The reducer function should be declared before using it in the useReducer hook
        switch (action.type) {
            case 'total':
                return calculateTotalValue(items);
                default:
                    return state;
                }
            }
            
    const [totVal, dispatch] = useReducer(reducer, 0);
    
    // Dispatch action to calculate total value
    useEffect(() => {
        dispatch({ type: 'total' });
    }, [items]);

    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: ${totVal}</p>
        </div>
    );
};
