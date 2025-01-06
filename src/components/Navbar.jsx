import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const favoritesCount = useSelector((state) => state.favorites.length);
  const { language, changeLanguage } = useLanguage();

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
            <li>
              <div className='dropdown'>
                <button
                  className='btn btn-secondary dropdown-toggle'
                  type='button'
                  id='languageDropdown'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  style={{
                    background: "#ffffff",
                    border: "none",
                    color: "black",
                    fontSize: "13px",
                  }}
                >
                  {language.toUpperCase()}
                </button>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='languageDropdown'
                >
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => changeLanguage("en")}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => changeLanguage("ar")}
                    >
                      Arabic
                    </button>
                  </li>
                </ul>
              </div>
            </li>

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
