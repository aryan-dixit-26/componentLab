import Crum from "./Crum";

const BreadCrum = (props) => {
  const { config } = props;

  return (
    <div className="breadcrum">
      {config.map((crum) => (
        <Crum {...crum} />
      ))}
      <div className="content">{config[config.length - 1].component}</div>
    </div>
  );
};

export default BreadCrum;
