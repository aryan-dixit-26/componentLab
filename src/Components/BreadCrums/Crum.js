const Crum = (props) => {
  const { name, children } = props;

  return (
    <div className="crum">
      <a href="www.google.com" className="link">
        {name} /
      </a>
    </div>
  );
};

export default Crum;
