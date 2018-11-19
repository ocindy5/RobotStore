import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';



class RobotById extends Component {

  emptyItem = {
    name: '',
    price: '',
    description:''
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem,
    };
  }

  async componentDidMount() {
    const id =  this.props.match.params.id;
    const robot = await (await fetch('/robots/' + id)).json();
    this.setState({item: robot});
  }


  render() {
    const {item} = this.state;

    return <div>
    <AppNavbar/>
    <Container className="single_content">

    <h2 className="single_title">{item.name}</h2> <br />
    <Label for="price" className="price">{item.price}€</Label>
    <Label for="description" className="description">{item.description}</Label>

    <Button outline color="secondary" tag={Link} to="/robots" size="lg" className="back">Back</Button>
    </Container>
    </div>
  }
}

export default withRouter(RobotById);
