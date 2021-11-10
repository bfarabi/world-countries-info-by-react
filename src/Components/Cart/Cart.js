import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((sum, country) => sum + country.population,0);
    
    return (
        <div>
            <h3>added Country: {cart.length}</h3>
            <p>Total population: {total} </p>
        </div>
    );
};

export default Cart;