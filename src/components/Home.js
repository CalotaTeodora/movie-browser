import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Movie browser" />
      <div className="container">
        <div className="row">
          <div className="col-8 offset-lg-2 my-5">
            <p className="lead">
              Welcome to Movie Browser. The fastest way to find your favorite
              movies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
