import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-8 offset-lg-2 my-5">
            <p className="lead">
              Calota Maria Teodora. Atestat Informatica clasa a 12 a B. Technologia folosita: React.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
