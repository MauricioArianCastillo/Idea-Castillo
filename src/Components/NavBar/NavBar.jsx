import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to={'/'}>
              <a className="navbar-brand" href="#">Mi Tienda</a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to={'/'}>
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Link to={'/categorias'}><a className="nav-link" href="#">Categorias</a></Link>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link to={'/categorias/martillos'}><a className="dropdown-item" href="#">Martillos</a></Link></li>
                    <li><Link to={'/categorias/palas'}><a className="dropdown-item" href="#">Palas</a></Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Precios</a>
                </li>
                <CartWidget />
            </ul>
            </div>
        </div>
        </nav>
      </>
    );
  }
  
  export default NavBar;