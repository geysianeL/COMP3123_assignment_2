import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { format } from 'date-fns';
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
          <h3>List of Employees</h3>
          <div className="d-flex justify-content-end mb-3">
            <Button variant="outline-info" size="sm" href="/register-employee">
              Register Employee
            </Button>
          </div>
          {employees.length === 0 ? (
            <p>No employees found</p>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Position</th>
                  <th>Salary</th>
                  <th>Date of Joining</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{`${employee.first_name} ${employee.last_name}`}</td>
                    <td>{employee.email}</td>
                    <td>{employee.position}</td>
                    <td>{employee.salary}</td>
                    <td>
                      {format(new Date(employee.date_of_joining), 'yyyy-MM-dd')}
                    </td>
                    <td>{employee.department}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ListEmployees;
