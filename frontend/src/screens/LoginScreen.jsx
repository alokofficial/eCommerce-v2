import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useLoginMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FaRegUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [login, {isLoading}] = useLoginMutation()

    const {userInfo} = useSelector(state => state.auth)

    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const redirect = searchParams.get('redirect') || '/'

    useEffect(() => {
        if(userInfo){
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await login({email, password}).unwrap()
            dispatch(setCredentials({...res}))
            navigate(redirect)
        } catch (error) {
            toast.error(error?.data?.message || error.error)
        }
    }

  return (
    <FormContainer>
      <CheckoutSteps step1 />
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button disabled={isLoading} type='submit' variant='primary'>
          Sign In
        </Button>
        {isLoading && <Loader />}
      </Form>
      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register <FaRegUser />
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen