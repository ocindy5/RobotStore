import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class RobotAdd extends Component {

  emptyItem = {
    name: '',
    price: '',
    description: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/robots', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/robots');
  }

  render() {

    const title = <h2>Add Group</h2>;

    return (
      <div>
      <AppNavbar/>
      <Container className="add_content">
      {title}
      <Form onSubmit={this.handleSubmit}>
      <FormGroup>
      <Label for="name">Name</Label>
      <Input type="text" name="name" id="name"
      onChange={this.handleChange} autoComplete="name" required/>
      </FormGroup>
      <FormGroup>
      <Label for="price">Price</Label>
      <Input type="text" name="price" id="price"
      onChange={this.handleChange} autoComplete="price" required/>
      </FormGroup>
      <FormGroup>
      <Label for="description">Description</Label>
      <Input type="text" name="description" id="description"
      onChange={this.handleChange} autoComplete="description" required/>
      </FormGroup>
      <FormGroup>
      <Button outline color="primary" type="submit" size="lg">Save</Button> &nbsp;
      <Button outline color="secondary" tag={Link} to="/robots" size="lg">Cancel</Button>
      </FormGroup>
      </Form>
      </Container>
      </div>
    )
  }
}

export default withRouter(RobotAdd);
