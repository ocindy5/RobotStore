import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table, Badge } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class RobotsList extends Component {

  constructor(props) {
    super(props);
    this.state = {robots: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('robots')
    .then(response => response.json())
    .then(data => this.setState({robots: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/robots/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedRobots = [...this.state.robots].filter(i => i.id !== id);
      this.setState({robots: updatedRobots});
    });
  }

  render() {
    const {robots, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const robotsList = robots.map(robot => {
      return <tr key={robot.id}>
      <td style={{whiteSpace: 'nowrap'}}>{robot.name}</td>
      <td style={{whiteSpace: 'nowrap'}}>{robot.price}€</td>
      <td>
      <ButtonGroup>
      <Button size="sm" outline color="primary" tag={Link} to={"/robots/" + robot.id} size="lg">Show</Button> &nbsp;
      <Button size="sm" outline color="danger" onClick={() => this.remove(robot.id)} size="lg">Delete</Button>
      </ButtonGroup>
      </td>
      </tr>
    });

    return (
      <div>
      <AppNavbar/>
      <Container fluid>
      <div className="float-right">
      <Button outline color="success" tag={Link} to="/robots/new" size="lg">+ Add Robot</Button>
      </div>
      <h3>Robots Store</h3>
      <Table className="mt-4">
      <thead>
      <tr>
      <th width="20%">Name</th>
      <th width="20%">Price</th>
      <th width="10%">Actions</th>
      </tr>
      </thead>
      <tbody>
      {robotsList}
      </tbody>
      </Table>
      </Container>
      </div>
    );
  }
}

export default RobotsList;
