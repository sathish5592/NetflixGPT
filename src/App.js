
import './App.css';
import Browse from './components/Browse';
import Header from './components/Header';
import Login from './components/Login';
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
       <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/browse' element={<Browse/>} />
       </Routes>
      
    </div>
  );
}

export default App;
