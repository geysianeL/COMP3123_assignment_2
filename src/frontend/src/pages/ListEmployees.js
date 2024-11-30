import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import employeeService from '../services/employeeService';

const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const result = await employeeService.getEmployees();
        setEmployees(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1>List of Employees</h1>
          <div className="d-flex justify-content-end mb-3">
            {' '}
            <Button variant="outline-info" size="sm" href="/register-employee">
              Register Employee
            </Button>{' '}
          </div>
          <ListGroup>
            {employees.length === 0 ? (
              <ListGroup.Item>No employees found</ListGroup.Item>
            ) : (
              employees.map((employee) => (
                <ListGroup.Item key={employee.id}>
                  {employee.name}
                </ListGroup.Item>
              ))
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ListEmployees;
