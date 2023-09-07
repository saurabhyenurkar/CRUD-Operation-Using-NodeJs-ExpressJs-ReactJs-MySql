 import {Link} from "react-router-dom";

 const Navbar = () =>{
     return(
        <div className="container">
            <nav className="navbar navbar-expand-lg py- mb-3 border-bottom">
                <div className="container-fluid">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 md-auto link-body-emphasis text-decoration-none">
                        <img className="bi me-2" src="assets/logo/logo.ico" alt="ico" width="35px" height="35px"></img>
                        <span className="fs-4">CRUD App</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse text-center navbar-collapse" id="navbarNav">
                        <ul className="nav nav-justified nav-pills navbar-nav ms-auto gap-4 navbar-right">
                            <li className="nav-item"><Link to="/" className="nav-link active text-white" a aria-current="page">Home</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link active text-white" aria-current="page">About</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     )
 }
 
 export default Navbar;