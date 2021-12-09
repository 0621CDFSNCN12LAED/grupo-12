//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import Products from './components/Products';
//import {Switch, Route} from 'react-dom';
import TopCards from './components/cards/topCards';
import NavBar from './components/topNav/NavBar';
import ProductTable from './components/tables/productTable';
import UserTable from './components/tables/userTable';
import React from 'react';
//import Test from './components/tables/test';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <main>
          <NavBar />
          <div className="container general-container">
            <TopCards />
          </div>
          <div className="container general-container">
            <ProductTable />
            <UserTable />
          </div>

        </main>
      </div>
    </React.Fragment>

  );
}

export default App;
