import Hero from "./Hero";
import { Link } from "react-router-dom";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-8 offset-lg-2 my-5">
            <p className="lead">
              My name is Teodora. I'm 17 years old. I like to code from a young
              age. I started at 10 years old. Since then I'm thinkering with
              different project. This is my first big project on web development
              aerea. I'm so happy about this. If you want to contact me, please
              feel free to follow on :
            </p>
            <div
              class="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div class="btn-group me-2" role="group" aria-label="First group">
                <Link
                  className="link"
                  target="_blank"
                  to="https://www.instagram.com/_teo.__.5/"
                >
                  <button type="button" class="btn btn-primary ">
                    Instagram
                  </button>
                </Link>

                <Link
                  className="link"
                  target="_blank"
                  to="https://github.com/CalotaTeodora?tab=repositories"
                >
                  <button type="button" class="btn btn-primary">
                    Github
                  </button>
                </Link>

                <Link
                  className="link"
                  target="_blank"
                  to="https://www.linkedin.com/in/teo-calota-a714b6217/</div>"
                >
                  <button type="button" class="btn btn-primary">
                    LinkedIn
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
