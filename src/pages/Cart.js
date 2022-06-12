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



            <div className="lg:flex lg:justify-center ">



                {/* main */}
                <main className="lg:w-3/5 mb-3 py-2 bg-gray-300  ">
                    {prodsToShow.map((elem, index) => <CartProductSnippet cartLength={prodsToShow.length} index={index} key={elem.productId} quantity={elem.quantity} props={elem.productBody} />)}

                </main>
                <aside className='lg:w-1/5 lg:ml-7'>
                    <div className='border  bg-gray-300  '>
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