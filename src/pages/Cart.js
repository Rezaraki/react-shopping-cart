import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import CartProductSnippet from '../components/CartProductSnippet';

const Cart = () => {
    const navigate = useNavigate()
    const cartData = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const products = useSelector(state => state.products);
    // 
    //  find products with the given id
    const findProdWithId = (id, productsArr) => productsArr.find(prod => prod.id === id)

    // concat id,quntity and prodBidy in an obj return {productId,quantity,productBody}
    const cartProdObjMaker = (cartDataElem, productsArr) => { return { ...cartDataElem, productBody: findProdWithId(cartDataElem.productId, productsArr) } }

    //  an array of cart products with id and quantity
    const matchCartDataToProduct = (cartDataArr, productsArr) => cartDataArr.map(cartDataArrElem => cartProdObjMaker(cartDataArrElem, productsArr))
    const prodsToShow = matchCartDataToProduct(cartData, products)

    // number of deferent type product not with the quantity count
    const cartproductCount = prodsToShow.length

    const totalCost = prodsToShow.map(prod => prod.quantity * prod.productBody.price)?.reduce((preVal, curVal) => preVal + curVal, 0)


    return (
        <>

            <h2> cart page is here</h2>

            <div className="flex justify-center ">
                {/* main */}
                <main className="w-3/5 bg-gray-400  ">
                    {prodsToShow.map(elem => <CartProductSnippet key={elem.productId} quantity={elem.quantity} props={elem.productBody} />)}

                </main>
                <aside className='w-1/5 ml-7'>
                    <div className='border  bg-gray-400  '>
                        <h2>number of items: {cartproductCount}</h2>
                        <h2>cart totalcost {totalCost} </h2>
                        <button className='' onClick={() => { navigate('/checkout') }}>go to checkout</button>
                    </div>
                </aside>

            </div>

        </>);
}
// grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6
export default Cart;