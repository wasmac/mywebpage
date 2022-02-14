const GenerateTxt = ({ text, position, ...rest }) => {
  const options = Object.values({ ...rest });
  const classNames =
    "subMenuTxt  text-white text-center te font-light uppercase absolute " +
    position +
    " " +
    options;
  return <p className={classNames}>{text}</p>;
};

export default GenerateTxt;
