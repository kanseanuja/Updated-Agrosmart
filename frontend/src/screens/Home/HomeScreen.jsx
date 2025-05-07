import React from 'react';
import CardMenu from '../../components/CardMenuSet/CardMenu';
import Meta from '../../components/Helmet/Meta';
import OurServices from '../../components/OurServices/OurServices';
import SliderComponent from '../../components/Slider/Slider';
import { Container } from 'react-bootstrap';

const HomeScreen = () => {
    return (
        <>
            <Meta />
            <SliderComponent />
            <CardMenu />
            <OurServices />

            {/* Market Updates Box */}
            <Container style={{ marginTop: '30px' }}>
                <div style={{
                    backgroundColor: '#e6fff5',
                    padding: '20px',
                    borderRadius: '10px',
                    border: '1px solid #c3e6cb',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}>
                    <h5 style={{ color: '#2e7d32' }}>📈 Market Updates</h5>
                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                        <li>🌾 Wheat: ₹2100/qtl</li>
                        <li>🥔 Potato: ₹800/qtl</li>
                        <li>📢 Onion in high demand</li>
                        <li>💰 PM-KISAN update available</li>
                    </ul>
                </div>
            </Container>
        </>
    )
}

export default HomeScreen;
