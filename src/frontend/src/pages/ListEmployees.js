import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  FormControl,
  InputGroup,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faUserPlus,
  faEnvelope,
  faBriefcase,
  faDollarSign,
  faCalendarAlt,
  faBuilding,
  faTrash,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import employeeService from '../services/employeeService';
import ConfirmationDialog from '../components/ConfirmationDialog';

const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleDeleteClick = (id) => {
    setSelectedEmployeeId(id);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await employeeService.deleteEmployee(selectedEmployeeId);
      setEmployees(
        employees.filter((employee) => employee._id !== selectedEmployeeId),
      );
      setShowDeleteModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async () => {
    try {
      const result = await employeeService.searchEmployees(searchTerm);
      setEmployees(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>List of Employees</h3>
          <div className="d-flex justify-content-end mb-3">
            <InputGroup className="me-2" style={{ maxWidth: '300px' }}>
              <FormControl
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outline-secondary" onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup>
            <Button variant="outline-info" size="sm" href="/register-employee">
              <FontAwesomeIcon icon={faUserPlus} /> Register Employee
            </Button>
          </div>
          {employees.length === 0 ? (
            <p>No employees found</p>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    <FontAwesomeIcon icon={faUser} /> Name
                  </th>
                  <th>
                    <FontAwesomeIcon icon={faEnvelope} /> Email
                  </th>
                  <th>
                    <FontAwesomeIcon icon={faBriefcase} /> Position
                  </th>
                  <th>
                    <FontAwesomeIcon icon={faDollarSign} /> Salary
                  </th>
                  <th>
                    <FontAwesomeIcon icon={faCalendarAlt} /> Date of Joining
                  </th>
                  <th>
                    <FontAwesomeIcon icon={faBuilding} /> Department
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee._id}>
                    <td>{`${employee.first_name} ${employee.last_name}`}</td>
                    <td>{employee.email}</td>
                    <td>{employee.position}</td>
                    <td>{employee.salary}</td>
                    <td>
                      {format(new Date(employee.date_of_joining), 'yyyy-MM-dd')}
                    </td>
                    <td>{employee.department}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteClick(employee._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} /> Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
      <ConfirmationDialog
        show={showDeleteModal}
        title="Confirm Delete"
        message="Are you sure you want to delete this employee?"
        handleClose={() => setShowDeleteModal(false)}
        handleDelete={handleDeleteConfirm}
      />
    </Container>
  );
};

export default ListEmployees;
