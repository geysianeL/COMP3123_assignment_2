import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faFileAlt,
  faMoneyBillWave,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Employee Management</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Make the world simple
              </Card.Subtitle>
              <Card.Text>
                Welcome to the Employee Management System. Here, you can:
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    style={{ color: 'green' }}
                  />
                  Register new employees
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon icon={faFileAlt} style={{ color: 'blue' }} />
                  Manage employee records
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon
                    icon={faMoneyBillWave}
                    style={{ color: 'gold' }}
                  />
                  Track salaries and benefits
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon
                    icon={faUserShield}
                    style={{ color: 'purple' }}
                  />
                  Create and manage user accounts
                </ListGroup.Item>
              </ListGroup>
              <Card.Text className="mt-3">
                Streamline your HR processes and make managing your team a
                breeze!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
