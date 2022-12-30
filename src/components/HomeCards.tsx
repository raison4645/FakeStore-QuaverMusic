import { Container, Card, Row, Col, Button } from "react-bootstrap"

/*export function HomeCards () {
  return (
    <div >
      <Row xs={1} lg={3} style={{margin: "3rem 0.5rem 3rem 0.5rem", }}>
          <Card className='h-100'>
            <Card.Img variant="top" src="" height="300px" style={{objectFit: "cover"}} />
            Find Your Instrument
          </Card>

          <Card className="h-100" >
          <Card.Img variant="top" src="" height="300px" style={{objectFit: "cover"}} />
            Music Performance Exam
          </Card>

          <Card className="h-100 " >
          <Card.Img variant="top" src="" height="300px" style={{objectFit: "cover"}} />
            Service Booking 
          </Card>
        </Row>
    </div>
  )
}*/

export function HomeCards () {
  return (
    <Container style={{margin: "2rem 0 2rem 0"}}>
      <Row style={{margin: "auto"}}>
        <Col>
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="kawai.png" />
            <Card.Body>
              <Card.Title>Find your Instrument</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" href="/Store">Our Store</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="kawai.png" />
            <Card.Body>
              <Card.Title>Book an Exam</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" href="">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="kawai.png" />
            <Card.Body>
              <Card.Title>Our Service</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" href="/Login">Login</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}