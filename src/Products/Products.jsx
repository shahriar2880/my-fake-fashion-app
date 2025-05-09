import { useEffect, useState } from "react"
import Product from "../product/Product"
import { addToLocalStorage, getStoredCart } from "../utilities/localStorage"

const Products = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data=> setProducts(data.products))
    },[])

    useEffect(()=>{
        if(products.length>0){
            const storedCart = getStoredCart();
            const savedCart = [];
            for(const id of storedCart){
                const product = products.find(product => product.id === id)
                if(product){
                    savedCart.push(product)
                }
            }
            setCart(savedCart);
        }
    }, [products])

    const handleAddToCart = product =>{
        const newCart = [...cart, product]
        setCart(newCart);
        addToLocalStorage(product.id);
    }

  return (
    <div className="">
      <h1>Products:{products.length}</h1>
      <h2>Cart:{cart.length}</h2>
      <div className="grid grid-cols-3 gap-3">
      {
        products.map(product => <Product key={product.id} handleAddToCart={handleAddToCart} product={product}></Product>)
      }
      </div>
    </div>
  )
}

export default Products
