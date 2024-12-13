  import { Link } from "react-router-dom";
import "./navbar.css";
  
  const Navbar=()=>{
    return(
        <>
        <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid" style={{color:"white"}}>
    <Link className="navbar-brand" href="#" ><img  src="https://corretto.qodeinteractive.com/wp-content/themes/corretto/assets/img/logo-light.png"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color:"white"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop.js" style={{color:"white"}}>Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about.js" style={{color:"white"}}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact.js" style={{color:"white"}}>Contact</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
            Dropdown
          </Link>
          <ul className="dropdown-menu" style={{color:"white"}}>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item" >
          <a className="nav-link disabled" aria-disabled="true" style={{color:"white"}}>Disabled</a>
        </li>
        <li className="nav-item" style={{color:"white"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
        </li>
        <li className="nav-item" style={{color:"white"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
        
        </li>
        <li className="nav-item" style={{color:"white"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor" class="bi bi-view-stacked" viewBox="0 0 16 16">
  <path d="M3 0h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm0 8h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
</svg>
        </li>

      </ul>
      <form className="d-flex" role="search" style={{color:"white"}}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit" style={{color:"white"}} >Search</button>
      </form>
    </div>
  </div>
</nav>
        </>

    );
  };

  export default Navbar;