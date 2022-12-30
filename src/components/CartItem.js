import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover';


function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const [hovered, ref] = useHover()
    
    function trashHover() {
       
        if(hovered){
            return <i className="ri-delete-bin-fill" onClick={() => removeFromCart(item.id)}></i>
        } else {
            return <i className="ri-delete-bin-line"></i>
        }
    }
    return (
        <div className="cart-item" ref={ref}>
            {trashHover()}
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}
CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}


export default CartItem