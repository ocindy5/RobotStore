import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Jumbotron , Button } from 'reactstrap';

class Home extends Component {
  render() {
    return (

      <div>
      <AppNavbar/>
           <Jumbotron className="Jumbotron">
             <h1 className="display-3">Welcome to RobotShop!</h1>
             <p className="lead">You need a cook, a hairdresser or just a friend to cheer you up? What a coïncidence, we got them all !</p>
             <hr className="my-2" />
             <p className="lead">
               <Button size="lg"><Link to="/robots">Find your robot now</Link></Button>
             </p>
           </Jumbotron>
         </div>
    );
  }
}

export default Home;
