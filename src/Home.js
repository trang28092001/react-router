import { Outlet } from 'react-router-dom';
import Nav from './Navigation/Nav';
// import logo from './logo.svg';

const Home = () =>{
    return(
        
        // <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //         Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //         className="App-link"
        //         href="https://reactjs.org"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //     >
        //         Learn React
        //     </a>
        // </header>
        <>
            <Nav /> 
            <Outlet />
        </>
    );
}

export default Home