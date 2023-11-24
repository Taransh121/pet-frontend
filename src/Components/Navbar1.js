import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const Navbar1 = () => {
    const navigate = useNavigate();
    const logoutbtn = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">PetHarbor</Link>
                <div>
                    {!localStorage.getItem("token") ?
                        " " :
                        <button onClick={logoutbtn} className='btn btn-outline-light'>Logout</button>}
                </div>
            </div>
        </nav>
    )
}
