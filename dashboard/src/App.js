//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import Products from './components/Products';
//import {Button, Alert} from 'react-bootstrap';
import TopCards from './components/cards/topCards';
import NavBar from './components/topNav/NavBar';
import ProductTable from './components/tables/productTable';
//import Test from './components/tables/test';

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <div className="container general-container">
          <TopCards />
        </div>
        <div className="container general-container">
          <ProductTable />
        </div>

      </main>
    </div>
  );
}

export default App;
