import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const NavBar = () => {

    const cart = useSelector(state => state.cart)
    const cartLen = cart.length

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Redux toolkit E-com</Navbar.Brand>
                <Nav>
                
                        <Nav.Link to="/" as={Link}>Products</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end' >
                        <Navbar.Text>
                            <Nav.Link to="/Cart" as={Link}>My Bag {cartLen}</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar