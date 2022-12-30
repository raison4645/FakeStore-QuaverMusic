import {Container, Button, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import { useShoppingCart } from '../context/ShoppingCartContext'
export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()


  return (
    <NavbarBs sticky="top" className="bg-white shadow-lg mb-3">
      <Container>
        <span>
          <img src="../public/imgs/logo.png" style={{width: "150px", margin:"10px" }}/>
        </span>
        <Nav className="me-auto">
          <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
          <Nav.Link to='/Login' as={NavLink}>Login</Nav.Link>
          <Nav.Link to='/Store' as={NavLink}>Store</Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button 
          onClick={openCart}
          style={{width:"3.5rem", height:"3.5rem", position:"relative"}}
          variant="outline-secondary"
          className='rounded-circle'>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 44.75 44.75">
            <path d="M37.409,18.905l-4.946-7.924c-0.548-0.878-1.51-1.411-2.545-1.411H3c-1.657,0-3,1.343-3,3v16.86c0,1.657,1.343,3,3,3h0.787   c0.758,1.618,2.391,2.75,4.293,2.75s3.534-1.132,4.292-2.75h20.007c0.758,1.618,2.391,2.75,4.293,2.75   c1.9,0,3.534-1.132,4.291-2.75h0.787c1.656,0,3-1.343,3-3v-2.496C44.75,22.737,41.516,19.272,37.409,18.905z M8.087,32.395   c-1.084,0-1.963-0.879-1.963-1.963s0.879-1.964,1.963-1.964s1.963,0.88,1.963,1.964S9.171,32.395,8.087,32.395z M26.042,21.001   V15.57v-2.999h3.876l5.264,8.43H26.042z M36.671,32.395c-1.084,0-1.963-0.879-1.963-1.963s0.879-1.964,1.963-1.964   s1.963,0.88,1.963,1.964S37.755,32.395,36.671,32.395z"/>
          </svg>
          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
          style={{color:'white', width:'1.5rem', height:'1.5rem', position:"absolute", bottom: 0, right: 0, transform:"translate(25%, 25%)"}}>
            {cartQuantity}
          </div>
  
          </Button>
        )}
        
      </Container>
    </NavbarBs>
  )
}