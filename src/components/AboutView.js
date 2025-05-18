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
            Numele elevului:Calota Teodora. 
            Clasa a 12 a B. 
            Profesor Coordonator: Mihaela Runceanu. 
            Liceul: Colegiul National Ecaterina Teodoroiu. 
            Technologia folosita: React
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
