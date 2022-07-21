import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link id="RouterNavLink"  to={'/'}>
              <div className="navbar-brand" >A y R Construcciones</div>
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link id="RouterNavLink"  to={'/'}>
                    <div className="nav-link active" aria-current="page" href="#">Home</div>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</div>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link id="RouterNavLink"  to={'/categorias/Martillos'}><div className="dropdown-item" href="#">Martillos</div></Link></li>
                    <li><Link id="RouterNavLink"  to={'/categorias/Palas'}><div className="dropdown-item" href="#">Palas</div></Link></li>
                  </ul>
                </li>
                <li>
                  <Link id="RouterNavLink" to={'/about'}>
                    <div className="nav-link active" aria-current="page" href="#">Quienes somos</div>
                  </Link>
                </li>
              </ul>
              <Link id="RouterNavLink"  to={'/cart'}>
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