import { useParams, Link } from 'react-router-dom'
import { Row,Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'


const ProductScreen = () => {

    const { id: productId } = useParams()
    const product = products.find((item) => item._id === productId)
  return (
    <>
        <Link className='btn btn-dark my-3 rounded' to='/'>
            Go Back
        </Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid className='border' />
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating
                            value={product.rating}
                            text={`${product.numReviews} reviews`}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: <strong>${product.price}</strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: <p>{product.description}</p>
                    </ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Quantity
                                </Col>
                                <Col>
                                 {product.countInStock > 0?
                                    <select>
                                        {[...Array(product.countInStock).keys()].map((x) => (
                                            <option key={x+1}>{x+1}</option>
                                        ))}
                                    </select>:null
                                 }
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>

        </Row>
        
    </>
  )
}

export default ProductScreen