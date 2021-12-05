//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './components/Products';
import {Button, Alert} from 'react-bootstrap';
import TopCards from './components/cards/topCards';
import NavBar from './components/topNav/NavBar';

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <div className="container">
          <TopCards />
        </div>
        <Products products={["Mochila3", "Mochila4"]} title="Productos1" />
        <Alert variant="primary"> This is a button</Alert>
        <Button>Test button </Button>
      </main>
    </div>
  );
}

export default App;
