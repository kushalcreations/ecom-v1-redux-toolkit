import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { getProducts } from '../redux/productSlice';
import StatusCode from '../utils/StatusCode';


const Product = () => {
    const {data: products,status} = useSelector(state => state.products)
    const dispatch = useDispatch()
    // api
    useEffect(() => {
        // dispatch an action to fetch products
        dispatch(getProducts());


        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => getProducts(result))
    }, [dispatch])

    if(status === StatusCode.LOADING){
        return <h1>Loading...</h1>
    }

    if(status === StatusCode.ERROR){
        return <Alert key="danger" variant='danger' >Error...</Alert>
    }

    const card = products.map((product, i) => (
        <div className="col-md-3" style={{ marginBottom: '10px' }} key={i}>
            <Card key={product.id} className='h-100' style={{ width: '18rem' }}>
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} height={200} className='object-fit-cover w-100 ' />

                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>INR.{product.price}</Card.Text>

                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: 'white' }}>
                        <Button variant="primary" onClick={() => dispatch(addToCart({
                            id: product.id,
                            title: product.title,
                            image: product.image,
                            price: product.price,
                            quantity: 1
                        }))}>Add to Cart</Button>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    ))
    return (
        <>
            <h1>Product Dashboard</h1>
            <div className='row'>
                {card}
            </div>

        </>
    )
}

export default Product