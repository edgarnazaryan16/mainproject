import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Myroute from './components/Routing/Myroute';

function App() {
  return (
    <BrowserRouter>
      <Myroute />
    </BrowserRouter>
  )
  // return (
  //   <Header />
  // );
}

export default App;
