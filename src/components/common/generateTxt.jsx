const GenerateTxt = ({
  text = " ",
  position = " ",
  text_pos = " text-center ",
  ...rest
}) => {
  const options = Object.values({ ...rest });
  const classNames =
    "subMenuTxt  text-white font-light uppercase absolute " +
    position +
    text_pos +
    " " +
    options;
  return <p className={classNames}>{text}</p>;
};

export default GenerateTxt;
