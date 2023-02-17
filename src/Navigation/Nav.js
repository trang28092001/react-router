import { NavLink } from "react-router-dom";

const Nav = () =>{
    return(
        <div className ="topnav">
            {/* <a className="active" href="/">Home</a>
            <a href="/news">News</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>  */}
              {/* Khi de nhu vay thi khi bam vao dau muc se bi reset lại trang */}
             

            <NavLink to="/" exact= {true}>Home</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink> 
        </div>
    );
}

export default Nav;
