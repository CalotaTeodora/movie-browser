import Hero from "./Hero";
// import { Link } from "react-router-dom";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-8 offset-lg-2 my-5">
            <p className="lead">
             Calota Teodora. Clasa a 12 a B. Technologia folosita: React
            </p>
            <div
              class="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
