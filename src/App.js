import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './Navigation/About';
import Contact from './Navigation/Contact';
import News from './Navigation/News';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>}>
            <Route index element = {<div>index component</div>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/news' element = {<News/>} />
            <Route path='/contact' element = {<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
