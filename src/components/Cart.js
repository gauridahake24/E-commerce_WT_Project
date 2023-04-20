import React from 'react'

const Cart = () => {
  return (
    <>
        <section id="page-header" className="about-header">
            <h2>#Let's_Talk </h2>
            <p>LEAVE A MESSAGE, We Love to hear from you!</p>
        </section>
        <section id="Cart" className="section-p1">
            <table>
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td> Quantity</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="/"><i className="fa fa-times-circle"></i></a></td>
                        <td><img src="./images/product1.jpg" alt='img'/> </td>
                        <td>Cotton T-shirts</td>
                        <td>700 rs</td>
                        <td><input type="number" value="1"/> </td>
                        <td>700 rs</td>
                    </tr>
                    <tr>
                        <td><a href="/"><i className="fa fa-times-circle"></i></a></td>
                        <td><img src="./images/product1.jpg" alt='img'/> </td>
                        <td>Cotton T-shirts</td>
                        <td>700 rs</td>
                        <td><input type="number" value="1"/> </td>
                        <td>700 rs</td>
                    </tr>
                    <tr>
                        <td><a href="/"><i className="fa fa-times-circle"></i></a></td>
                        <td><img src="./images/product1.jpg" alt='img'/> </td>
                        <td>Cotton T-shirts</td>
                        <td>700 rs</td>
                        <td><input type="number" value="1"/> </td>
                        <td>700 rs</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section id="cart-add" className="section-p1">
            <div id="coupon">
                <h3>Apply Coupon</h3>
                <input type="text" placeholder="Enter Your Coupon"/>
                <button className="normal">Apply</button>
            </div>
            <div id="subtotal">
                <h3>Cart Total</h3>
                <table>
                    <tr>
                        <td>Cart Subtotal</td>
                        <td>700rs</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>700 rs</strong></td>
                    </tr>
                </table>
                <button className="normal">Proceed To Checkout</button>
            </div>
        </section>
    </>
  )
}

export default Cart