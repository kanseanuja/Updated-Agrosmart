import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Card, Col, Button } from 'react-bootstrap';
import './PurchaseSeeds.css';
import Rating from '../Rating/Rating';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; // ✅ using useHistory instead of useNavigate
import { addToCart } from '../../actions/cartActions';

const PurchaseSeeds = ({ _id, name, rating, image, reviews, price }) => {
  const dispatch = useDispatch();
  const history = useHistory(); // ✅ React Router v5

  const addToCartHandler = () => {
    dispatch(addToCart(_id, 1)); // add to Redux cart
    alert('Seed added to cart!');
    history.push('/cart'); // ✅ redirect to cart page
  };

  return (
    <Col sm={12} md={6} lg={4}>
      <Card className="my-3 p-3">
        <Card.Img className="image card-image mx-auto" src={image} variant="top" />
        <Card.Body>
          <LinkContainer to={`/farmers/purchaseSeeds/${_id}`}>
            <Card.Title className="title">
              <strong>{name}</strong>
            </Card.Title>
          </LinkContainer>
          <Card.Text>
            <Rating value={rating} text={`${reviews} reviews`} />
          </Card.Text>
          <Card.Text>
            <h4>RS.{price}</h4>
          </Card.Text>
          <Button className="btn-preview" variant="success" onClick={addToCartHandler}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PurchaseSeeds;
