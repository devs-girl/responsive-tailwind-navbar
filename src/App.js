import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Header /> */}
    </BrowserRouter>
  );
}

export default App;
