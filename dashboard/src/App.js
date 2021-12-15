//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import Products from './components/Products';
import {Route, Switch} from 'react-router-dom';
import TopCards from './components/cards/topCards';
import NavBar from './components/topNav/NavBar';
import ProductTable from './components/tables/productTable';
import UserTable from './components/tables/userTable';
import React from 'react';
import CategoriesSection from './components/categories/CategoriesSection';
import OrderTable from './components/tables/orderTable';
//import Test from './components/tables/test';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <main>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <div className="container general-container">
                <TopCards />
              </div>
              <div className="container general-container">
                <ProductTable />
                <OrderTable />
              </div>
            </Route>
            <Route path="/products" component={ProductTable}/>
            <Route path="/users" component={UserTable}/>
            <Route path="/category" component={CategoriesSection} />
            <Route path="/orders" component={OrderTable} />

          </Switch>
  

        </main>
      </div>
    </React.Fragment>

  );
}

export default App;
