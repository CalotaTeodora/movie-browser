import { Link } from "react-router-dom";

const NoPageFounded = ({ keyword, path }) => {
  if (path !== keyword) {
    return (
      <>
        <h1 className="text-center mt-5">Error 404. Page not found.</h1>
        <div class="container">
          <div class="col-md-12 text-center">
            <Link className="link text-center" to="/">
              <button type="button" class="btn btn-secondary btn-lg mt-3">
                Go to home
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
};

export default NoPageFounded;
