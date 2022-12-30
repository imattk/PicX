import React, {useContext, useState} from "react"
import {Context} from '../Context'
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const [text, setText] = useState('Place Order')

    const cartItemElements = cartItems.map(item =>(
       <CartItem key={item.id} item={item} />
    ))
    const price = 5.99 * cartItems.length 
    const total = price.toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder() {
        setText('Ordering...')
     //wait 3 seconds before changing the text  
      setTimeout(() => {
          setText('Place Order')
            emptyCart() 
            alert("Thank You For Your Order")
      }, 3000); 
    }
    const displayButton = cartItems != 0 ? <div className="order-button">
    <button onClick={placeOrder}>{text}</button>
    </div> : <p>You have no items in your cart.</p>
   
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {total} </p>
            {displayButton}
        </main>
    )
}

export default Cart