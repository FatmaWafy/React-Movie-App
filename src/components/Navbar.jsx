import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const favoritesCount = useSelector((state) => state.favorites.length);

  return (
    <nav
      className='navbar navbar-expand-lg navbar-light'
      style={{ backgroundColor: "#ffd700" }}
    >
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

            <li>
              <Link
                to='/favorites'
                className='btn'
                style={{
                  backgroundColor: "#ffffff",
                  color: "black",
                  height: "25px",
                  width: "25px",
                  fontSize: "13px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "0",
                }}
              >
                {favoritesCount}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
