import { useDispatch, useSelector } from "react-redux"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { decrementQuantity, incrementQuantity, removeFromCart } from "../redux/cartSlice";

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleAddToCart = (productID) => {
        dispatch(incrementQuantity(
            { id: productID }
        ))
    }

    const handleRemoveFromCart = (productID) => {
        dispatch(decrementQuantity(
            { id: productID }
        ))
    }

    const handleRemove = (productID) => {
        dispatch(removeFromCart(
            { id: productID }
        ))
    }


    return (
        <>
            {
                cart.map((product, i) => (
                    <div className="col-md-3" style={{ marginBottom: '10px' }} key={i}>
                        <Card key={product.id} className='h-100' style={{ width: '18rem' }}>
                            <div className='text-center'>
                                <Card.Img variant="top" src={product.image} height={200} className='object-fit-cover w-100 ' />

                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>INR.{product.price}</Card.Text>
                                    <Card.Text>Quantity: {product.quantity}</Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: 'white' }}>
                                    <Button className="mx-2" variant="primary" onClick={() => handleAddToCart(product.id)}>+</Button>
                                    <Button className="mx-2" variant="primary" onClick={() => handleRemoveFromCart(product.id)}>-</Button>
                                    <Button className="mx-2" variant="danger" onClick={() => handleRemove(product.id)}>Remove</Button>
                                </Card.Footer>
                            </div>
                        </Card>
                    </div>
                ))
            }
        </>
    )
}

export default Cart
