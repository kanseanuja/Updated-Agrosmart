import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Button, Alert } from 'react-bootstrap';
import PurchaseSeeds from '../../components/PurchaseSeeds/PurchaseSeeds';
import './Farmer_ProductSeedStyles.css';
import Meta from '../../components/Helmet/Meta';

const Farmer_ProductSeedScreen = () => {
    const productSeeds = [
        {
            _id: '1',
            name: 'Wheat Seeds',
            image: 'https://5.imimg.com/data5/TK/JE/MY-31990508/wheat-seeds-500x500.jpg',
            rating: 4.5,
            numReviews: 12,
            price: 150,
        },
        {
            _id: '2',
            name: 'Rice Seeds',
            image: 'https://gonefarmers.com/cdn/shop/products/image_7dbb3679-f62e-4d20-b7f6-36c154bb7f22_1200x1200.jpg?v=1665752959',
            rating: 4.2,
            numReviews: 18,
            price: 120,
        },
        {
            _id: '3',
            name: 'Corn Seeds',
            image: 'https://media.istockphoto.com/id/1308275817/photo/close-up-of-organic-yellow-corn-seed-or-maize-full-frame-background.jpg?s=612x612&w=0&k=20&c=W0hNlejbZQ41HMPd8j5IsDuS8B96JO9plGFtqsuZEd0=',
            rating: 4.8,
            numReviews: 22,
            price: 180,
        },
        {
            _id: '4',
            name: 'Soybean Seeds',
            image: 'https://5.imimg.com/data5/BU/NH/TX/SELLER-51900729/soya-doc-500x500.jpg',
            rating: 4.6,
            numReviews: 15,
            price: 160,
        },
        {
            _id: '5',
            name: 'Barley Seeds',
            image: 'https://t3.ftcdn.net/jpg/04/53/31/92/360_F_453319239_gfodTaG7yrnHPC3b8O2vJwlllIJtS3xW.jpg',
            rating: 4.3,
            numReviews: 10,
            price: 140,
        },
        {
            _id: '6',
            name: 'Cotton Seeds',
            image: 'https://media.sciencephoto.com/image/c0273279/800wm',
            rating: 4.7,
            numReviews: 20,
            price: 200,
        }
    ];

    const [numberOfItems, setNumberOfItems] = useState(3);

    const showMore = () => {
        if (numberOfItems + 3 <= productSeeds.length) {
            setNumberOfItems(numberOfItems + 3);
        } else {
            setNumberOfItems(productSeeds.length);
        }
    };

    const handleAddToCart = async (productId) => {
        try {
            const response = await axios.post('/api/cart', {
                productId,
                quantity: 1
            });

            alert('Item added to cart!');
        } catch (error) {
            console.error(error);
            alert('Failed to add to cart!');
        }
    };

    return (
        <div className="ProductSeedScreen">
            <Meta title="AgroSmart | Farmer Seeds" />
            <Container>
                <h1 className="p-3 text-center">Latest Seeds</h1>
                <Row>
                    {productSeeds.slice(0, numberOfItems).map(seed => (
                        <PurchaseSeeds
                            key={seed._id}
                            _id={seed._id}
                            name={seed.name}
                            image={seed.image}
                            rating={seed.rating}
                            reviews={seed.numReviews}
                            price={seed.price}
                            handleAddToCart={handleAddToCart}
                        />
                    ))}

                    {numberOfItems >= productSeeds.length ? (
                        <Alert style={{ backgroundColor: 'red' }} className="col-md-12 text-center">
                            Finished
                        </Alert>
                    ) : (
                        <Button className="col-md-12 text-center" variant="success outline-dark" onClick={showMore}>
                            Show more
                        </Button>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Farmer_ProductSeedScreen;
