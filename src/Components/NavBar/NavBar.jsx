import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link to={'/'}>
              <a className="navbar-brand" href="#">Mi Tienda</a>
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={'/'}>
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link to={'/categorias/martillos'}><a className="dropdown-item" href="#">Martillos</a></Link></li>
                    <li><Link to={'/categorias/palas'}><a className="dropdown-item" href="#">Palas</a></Link></li>
                  </ul>
                </li>
                <li>
                  <Link to={'/about'}>
                    <a className="nav-link active" aria-current="page" href="#">Quienes somos</a>
                  </Link>
                </li>
              </ul>
              <Link to={'/cart'}>
                <ul className="d-flex">
                      <CartWidget /> 
                </ul>
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default NavBar;