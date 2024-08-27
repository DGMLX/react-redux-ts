import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
            <nav className="flex justify-evenly mt-5 mb-5">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/analitycs">Admin</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/login">Login</Link>
            </nav>
        </>
    )
}

export default Navbar;