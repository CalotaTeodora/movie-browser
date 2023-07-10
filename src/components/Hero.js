const Hero = ({ text, backdrop }) => {
  return (
    <header className="hero-container p-3 mb-5 bg-dark text-white shadow rounded">
      <h1 className="hero-text  shadow">{text}</h1>
      {backdrop && (
        <div
          className="hero-backdrop"
          style={{ backgroundImage: `url(${backdrop})` }}
        ></div>
      )}
    </header>
  );
};

export default Hero;
