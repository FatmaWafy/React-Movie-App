import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-warning'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Movie App
        </Link>
        <div className=' navbar'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/watchlist'>
                <FontAwesomeIcon icon={faHeart} className='me-2' />
                Watchlist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
