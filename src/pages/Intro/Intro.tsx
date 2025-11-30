import './Intro.css';
import {Button, Carousel} from "react-bootstrap";
import slajd1 from './slajd1.jpg'

export default function Intro() {

    const ExampleCarouselImage = ({ text } : {text: any}) => {
        return (
            <img
                className="d-block w-100"
                src={slajd1}
                alt={text}
            />
        );
    };

    return (
        <Carousel className="carousel">
            <Carousel.Item>
                <ExampleCarouselImage text="First slide" />
                <Carousel.Caption>
                    <h2>Zaloguj się</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}