import './App.css';
import { BrowserRouter } from 'react-router-dom';
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
