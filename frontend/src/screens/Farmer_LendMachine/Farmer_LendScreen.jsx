import React, { useState } from 'react';
import { Container, Row, Button, Alert } from 'react-bootstrap';
import LendMachines from './../../components/LendMachines/LendMachines';
import './Farmer_LendMachine.css';

import Meta from '../../components/Helmet/Meta';

const Farmer_LendScreen = () => {
    // Hardcoded machine lending data with images from Google
    const productLendMachines = [
        {
            _id: '1',
            name: 'Tractor',
            image: 'https://thumbs.dreamstime.com/b/mahindra-tractor-new-model-look-di-hp-best-selling-world-wd-rear-wheel-drive-red-color-india-manufacture-indian-no-209156003.jpg',
            target_plant: 'General Farming',
            price: 5000,
            quantity: 2,
        },
        {
            _id: '2',
            name: 'Plough Machine',
            image: 'https://images.jdmagicbox.com/rep/b2b/plough/plough-5.jpg',
            target_plant: 'Wheat & Rice Fields',
            price: 3000,
            quantity: 5,
        },
        {
            _id: '3',
            name: 'Seed Drill',
            image: 'https://kovaiclassicindustries.com/wp-content/uploads/2020/10/5911-TYNES-SEED-CUM-FERTILIZER-DRILLER.jpg',
            target_plant: 'Corn & Soybean',
            price: 2500,
            quantity: 3,
        },
        {
            _id: '4',
            name: 'Combine Harvester',
            image: 'https://images.tractorgyan.com/uploads/26907/63159f84cb1e3_combine-harvester-1.webp',
            target_plant: 'Grains & Cereals',
            price: 8000,
            quantity: 1,
        },
        {
            _id: '5',
            name: 'Sprayer Machine',
            image: 'https://5.imimg.com/data5/AY/WA/DU/SELLER-7696205/agriculture-battery-operated-spray-machine.jpg',
            target_plant: 'Pesticide & Fertilizer Application',
            price: 4000,
            quantity: 6,
        },
        {
            _id: '6',
            name: 'Rotavator',
            image: 'https://m.media-amazon.com/images/I/71UkFP+3UML.jpg',
            target_plant: 'Soil Preparation',
            price: 3500,
            quantity: 4,
        }
    ];

    const [numberOfItems, setNumberOfItems] = useState(3);

    const showMore = () => {
        if (numberOfItems + 3 <= productLendMachines.length) {
            setNumberOfItems(numberOfItems + 3);
        } else {
            setNumberOfItems(productLendMachines.length);
        }
    };

    return (
        <div className="MachineLendScreen">
            <Meta title="AgroSmart | Farmer Machines" />
            <Container>
                <h1 className="p-3 text-center">All Machines</h1>
                <Row>
                    {productLendMachines.slice(0, numberOfItems).map(machine => (
                        <LendMachines
                            key={machine._id}
                            _id={machine._id}
                            name={machine.name}
                            image={machine.image}
                            targetPlant={machine.target_plant}
                            price={machine.price}
                            quantity={machine.quantity}
                        />
                    ))}
                    
                    {numberOfItems >= productLendMachines.length ? (
                        <Alert style={{ backgroundColor: 'red' }} className="col-md-12 text-center">
                            Finished
                        </Alert>
                    ) : (
                        <Button className="col-md-12 text-center show-more-button" onClick={showMore}>
                            Show more
                        </Button>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Farmer_LendScreen;
