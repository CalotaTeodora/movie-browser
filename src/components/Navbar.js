import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ searchText, setSearchText, inputText, setInputText }) => {
  const navigate = useNavigate();
  const updateInputText = (e) => {
    setInputText(e.target.value);
  };

  const searchSubmit = (clicked) => {
    clicked.preventDefault();
    navigate("/search");
    setSearchText(inputText);
    setInputText("");
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            MovieBrowser
          </Link>
          <div
            class="navbar-toggler"
            // type="button"
            // data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            // aria-expanded="true"
            // aria-label="Toggle navigation"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-2">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link class="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                  </ul>
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <form className="d-flex">
                        <input
                          id="searchInput"
                          className="form-control me-2 woocommerce"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                          // value={searchText}
                          value={inputText}
                          // onChange={updateSearchText}
                          onChange={updateInputText}
                        />
                        <button
                          className="btn btn-outline-success"
                          type="submit"
                          onClick={searchSubmit}
                        >
                          Search
                        </button>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link disabled"
                  to="gosomewhare"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Coming Soon
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                id="searchInput"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                // value={searchText}
                value={inputText}
                // onChange={updateSearchText}
                onChange={updateInputText}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={searchSubmit}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
