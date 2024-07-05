import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GetPage from './fetchData'; // Import the GetPage component
import EmployeeList from './EmployeeList'; // Import the EmployeeList component
import UpdateEmployeeById from './updata';
import DeleteEmployeeById from './delete'
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
                <Link to ="/get">Get data</Link>
            </li>
            
            <li>
                <Link to ="/post">Post data</Link>
            </li>

            <li>
                <Link to ="/employees/">update data</Link>
            </li>
             
            <li>
                <Link to ="/delete/">delete data</Link>
            </li>

          </ul>
        </nav>
        <div className="content">

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        
          <Route path="/get">
            <GetPage/>
          </Route>

          <Route path="/post">
            <EmployeeList/>
          </Route>

          <Route path="/employees/">
            <UpdateEmployeeById/>
          </Route>

          <Route path="/delete/">
            <DeleteEmployeeById/>
          </Route>

        </Switch>
        </div>
      </div>
    </Router>
  );
};

const Home = () => {
  return <h2>Home Page</h2>;

  <p>
    This is a simple MERN application which use REACT_JS, MONGODB, NODE_JS, EXPRESS_JS</br>
    and performs crud(create, read, update, delete) operations with good UI design 
  </p>
};

export default App;
