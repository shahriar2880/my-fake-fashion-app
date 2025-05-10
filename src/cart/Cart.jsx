import PropTypes from "prop-types";


const Cart = ({cart, handleRemoveFromCart}) => {
  return (
    <div>
      <h1>Cart:{cart.length}</h1>
      <div className="grid grid-cols-12">
        {
            cart.map(product => <div className="flex h-9 w-9" key={product.id}>
                <img src={product.images[0]}/>
                
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
