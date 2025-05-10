import PropTypes from "prop-types";


const Cart = ({cart, handleRemoveFromCart}) => {
  return (
    <div>
      <h1>Cart:{cart.length}</h1>
      <div className="grid grid-cols-6  text-center">
        {
            cart.map(product => <div className="flex h-9 w-9 gap-1 mb-2" key={product.id}>
                <img src={product.images[0]}/>
                <button className="bg-blue-400 rounded pt-2 pb-2 pl-2 pr-2" onClick={()=> handleRemoveFromCart(product.id)}>Remove</button>
                </div>)
        }
      </div>
    </div>
  )
}

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart
