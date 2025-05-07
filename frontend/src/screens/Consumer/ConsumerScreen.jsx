import React, { useState } from 'react';
import { Container, Row, Button, Alert } from 'react-bootstrap';
import Meta from '../../components/Helmet/Meta';
import './ConsumerStyles.css';

const cropImages = [
    { id: 1, name: 'Wheat', image: 'https://images.unsplash.com/photo-1437252611977-07f74518abd7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hlYXQlMjBjcm9wfGVufDB8fDB8fHww' },
    { id: 2, name: 'Rice', image: 'https://t4.ftcdn.net/jpg/09/47/19/71/360_F_947197189_OmyKmvXf25RlHFODviXKNL1zddUMFIaN.jpg' },
    { id: 3, name: 'Corn', image: 'https://img.freepik.com/free-photo/corn-cobs-field_1268-33591.jpg?semt=ais_hybrid' },
    { id: 4, name: 'Barley', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMSRkSLwr04jukwqqHWQMshRzaOZ9Y5j0dw&s' },
    { id: 5, name: 'Millet', image: 'https://media.istockphoto.com/id/1430035758/photo/a-man-is-holding-a-piece-of-millet.jpg?s=612x612&w=0&k=20&c=3wAWKJXu2YvRyyxqa280JiJKXIVZ2Hl6r7i6AJNS0uU=' },
    { id: 6, name: 'Soybean', image: 'https://plantura.garden/uk/wp-content/uploads/sites/2/2021/10/early-soybean.jpg' }
];

const ConsumerScreen = () => {
    const [numberOfItems, setNumberOfItems] = useState(3);

    const showMore = () => {
        if (numberOfItems + 3 <= cropImages.length) {
            setNumberOfItems(numberOfItems + 3);
        } else {
            setNumberOfItems(cropImages.length);
        }
    };

    return (
        <div className="consumerProductScreen">
            <Meta title="AgroSmart | Consumer" />
            <Container className='consumerContainer'>
                <h1 className="title">CONSUMER</h1>
                <h4 className="consumer-title">
                    No need to visit fields to get grains! Just order here and get all kinds of grains delivered to your doorstep.
                </h4>
                <br />
                <Row>
                    {cropImages.slice(0, numberOfItems).map(crop => (
                        <div key={crop.id} className="crop-card">
                            <img src={crop.image} alt={crop.name} className="crop-image" />
                            <h5>{crop.name}</h5>
                            <Button variant="success" className="add-to-cart">Add to Cart</Button>
                        </div>
                    ))}
                    {numberOfItems >= cropImages.length && (
                        <Alert style={{ backgroundColor: 'red' }} className="col-md-12 text-center">Finished</Alert>
                    )}
                    <Button className="col-md-12 text-center" variant="success outline-dark" onClick={showMore}>Show more</Button>
                </Row>
            </Container>
        </div>
    );
};

export default ConsumerScreen;
