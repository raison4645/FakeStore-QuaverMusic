import Carousel from 'react-bootstrap/Carousel';

export function PhotoGallery() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../public/imgs/home1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>21st Chopin Piano Competition, Warsaw</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../public/imgs/home2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Experience Spirio, Hamburg</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../public/imgs/home3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>The Juiliard School, New York</h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

