import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import CartProductSnippet from '../components/CartProductSnippet';

const Cart = () => {

    const cartData = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products);

    //  find products with the given id
    const findProdWithId = (id, productsArr) => productsArr.find(prod => prod.id === id)

    // concat id,quntity and prodBidy in an obj return {productId,quantity,productBody}
    const cartProdObjMaker = (cartDataElem, productsArr) => { return { ...cartDataElem, productBody: findProdWithId(cartDataElem.productId, productsArr) } }

    //  an array of cart products with id and quantity
    const matchCartDataToProduct = (cartDataArr, productsArr) => cartDataArr.map(cartDataArrElem => cartProdObjMaker(cartDataArrElem, productsArr))




    // const [productsToshow, SetProductsToshow] = useState()
    // SetProductsToshow(ProductsToShow)
    // ************doesnt rerender on change of quantity and probably anything else
    // not functioned enough
    return (
        <>

            <h2> cart page is here</h2>

            <div className="flex justify-center ">
                {/* main */}
                <main className="w-3/5 bg-gray-400 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 ">
                    {matchCartDataToProduct(cartData, products).map(elem => <CartProductSnippet key={elem.productId} quantity={elem.quantity} props={elem.productBody} />)}
                </main>
                <aside>some content to be placed here</aside>

            </div>

        </>);
}

export default Cart;