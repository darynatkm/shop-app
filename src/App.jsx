import { useState, useEffect } from 'react';
import Context from './Context';
import ProductList from './components/ProductList';
import NavBar from './components/NavBar';
import ProductPage from './components/ProductPage';
import ShoppingCart from './components/ShoppingCart';
import {Routes,  Route, useNavigate} from "react-router-dom"
import Layout from './components/Layout';
import {Home, Single, NotFound, Products, Contact, About} from './components/pages'


function App() {

  const [products, setProducts] = useState([])
  const [product, setProduct] = useState([])
  const [cart, setCart] = useState([])
  const [shoppingCartDisplayed, setShoppingCartDisplayed] = useState(false)
  const [productPageDisplayed, setProductPageDisplayed] = useState(false)
  const  [totalPrice,setTotalPrice] = useState(0)

  const displayProductPage = (id) => {

    setProductPageDisplayed(true)
    fetch(baseUrl + `products/${id}`)
    .then(res => res.json())
    .then(json => setProduct(json))
  } 
  const navigate = useNavigate();

  const goBack = () => {
      navigate(-1);
  } 

  const displayShoppingCart = () => {
    setShoppingCartDisplayed(true)
    getTotalPrice(cart)
  }

  const closeShoppingCart = () => {
    setShoppingCartDisplayed(false)
  }

  const continueShopping = () => {
    
    setShoppingCartDisplayed(false)
  }

  const getProductQuantity = (id) => {
    const quantity = cart.find(product => product.id === id)?.quantity;
    
    if (quantity === undefined) {
        return 0;
    }

    return quantity;
}
const getTotalPrice = (myShoppingCart) => {

  let prices = myShoppingCart.map((product) => product.price * product.quantity)
  setTotalPrice(prices.reduce((acc, curr) => acc + curr, 0))
  
}
  const addToCart = (product) => {

    const quantity = getProductQuantity(product.id);

    if (quantity === 0) { 
        setCart(
            [
                ...cart,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: 1
                }
            ]
        )
    } else { 
        setCart(
            cart.map(
                prod =>
                prod.id === product.id                                
                ? { ...prod, quantity: prod.quantity + 1 } 
                : prod                                       
            )
        )
    }

  }
  

  const deleteItemFromCart = (id) => {

    const newCart = (cart).filter(item => item.id !== id)
    setCart(newCart)
    getTotalPrice(newCart)

  }
  const setUpdate = (updatedQuantity, id) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          item.quantity = updatedQuantity;
        }
        return item;
      })
    );
    getTotalPrice(cart)
  };


  useEffect(() => {
    let cartFromStorage = JSON.parse(localStorage.getItem('cart'));

    if (!cartFromStorage) {
      cartFromStorage = [...cart]
    } 

    setCart(cartFromStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetch(baseUrl + 'products?limit=20')
    .then(res => res.json())
    .then(json => setProducts(json))
  }, 0)
 
  const baseUrl = 'https://fakestoreapi.com/'
  
  const context = {

    cartCount : cart.length,
    addToCart,
    displayProductPage,
    displayShoppingCart,
    closeShoppingCart,
    continueShopping,
    goBack,
    setUpdate,
    deleteItemFromCart,
    totalPrice,
    productPageDisplayed, 
    product,
    products
  }

  return (
    <Context.Provider value={ context }>
      <div className="container">
      <Routes>
        <Route path="/" element = { <Layout/>} >
          <Route index element={ <Home/>}></Route>
          <Route path='about' element={ <About/>}></Route>
          <Route path='products' element={ <Products/>}></Route>
          <Route path='contact' element={ <Contact/>}></Route>
          <Route path='products/:id' element={ <Single/>}></Route>
          <Route path='*' element={ <NotFound/>}></Route>
        </Route>
      </Routes>
        {/* {productPageDisplayed ? <ProductPage product = {product}></ProductPage> : <ProductList products = {products}></ProductList>} */}
        {shoppingCartDisplayed ? <ShoppingCart cart = {cart}></ShoppingCart> : <></> }
      </div>
    </Context.Provider>


  );
}

export default App;

