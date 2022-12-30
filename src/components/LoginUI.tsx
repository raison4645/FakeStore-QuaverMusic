import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap"
import { Footer } from './Footer';


//should use useEffect here
export function LoginUI() {
  const login = async () => {

const res = await fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: "raison4645",
    password: "12345678",
    // expiresInMins: 60, // optional
  })
})
console.log(res)
            
  }
  
  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-4 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">
              <img src="../public/imgs/loginLogo.png" style={{width: "50%"}}/>
            </span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h4 className="fw-800 mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>WELCOME BACK</h4>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

            <Button className="mb-4 px-5 mx-5 w-100" variant="outline-secondary" onClick={login}>Login</Button>
            <Button className="mb-4 px-5 mx-5 w-100" variant="primary" onClick={login}>Login with Google</Button>
            <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="#!">Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="#!" className="link-info">Register here</a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="../public/imgs/loginImg.jpg"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>
      <MDBRow>
         <Footer />
      </MDBRow>

    </MDBContainer>
  );
}

