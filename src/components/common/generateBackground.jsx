function GenerateBackground({ img }) {
  return (
    <div className="relative flex w-screen h-screen ">
      <img
        className="absolute h-screen w-screen"
        src={img}
        alt={"backGround"}
      />
    </div>
  );
}

export default GenerateBackground;
