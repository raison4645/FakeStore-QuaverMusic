import { PhotoGallery } from "../components/PhotoGallery"
import { HomeCards } from "../components/HomeCards"
import { Footer } from "../components/Footer"
import { Container, Row, Col } from "react-bootstrap"


export function Home() {
  return (
    <>
      <Container>
        <Row>
          <PhotoGallery />
        </Row>
        <Row>
          <HomeCards />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  )

  
}