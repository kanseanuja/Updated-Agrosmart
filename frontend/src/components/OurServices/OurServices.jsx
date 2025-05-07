import React from 'react'
import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'
import './ourSerices.css'

const OurServices = () => {
    return (
        <Container className="main" fluid>
            <h1 className="main-title">COMPREHENSIVE SERVICES</h1>
            <p className="description">
                
            </p>
            <Container className="services">
                <Row>
                    <Col md={3}>
                        <h5 className="sub-title">Heavy Machine</h5>
                        <Image className="img" src="images/services/heavy.svg" fluid />
                        <p className="sub-desc">No need to worry of labour costing more. Just rent all types of machine here!!</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="sub-title">Gardening Kits</h5>
                        <Image className="img" src="images/services/gardening.svg" fluid />
                        <p className="sub-desc">We provides all of the gardening related products i.e seeds, pestisides and heavy machine.</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="sub-title">Supplier</h5>
                        <Image className="img" src="images/services/supplier.svg" fluid />
                        <p className="sub-desc">Now you produce. And we are here to sell your product. Just list your sell, and get proper pay for it.</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="sub-title">Consumer</h5>
                        <Image className="img" src="images/services/consumer.svg" fluid />
                        <p className="sub-desc">Why to visit Super Store and Pay High? Order all products and get deliver at your doorstep.</p>
                    </Col>
                </Row>
            </Container>
            <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }}
>
<div>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>

      {/* Weather Widget */}
      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
      <div
        className="elfsight-app-f737e17f-b7a3-45fb-8618-79c3c03ccb47"
        data-elfsight-app-lazy
      ></div>
    </div>
</div>
        </Container>
    )
}

export default OurServices
