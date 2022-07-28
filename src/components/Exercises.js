const Exercises = () => {
  return (
    <div id="exercises" className="flex flex-col min-w-full md:flex-row">
      {" "}
      <div className="flex flex-col md:w-1/2 place-content-center">
        <h3 className="flex mt-auto ml-20 text-3xl p-4 w-7/12 ">Exercises</h3>
        <p className="p-4 my-7 ml-20 text-justify text-lg w-7/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
          orci nulla pellentesque dignissim. Felis bibendum ut tristique et
          egestas. Cras pulvinar mattis nunc sed blandit libero. Cursus mattis
          molestie a iaculis at erat pellentesque adipiscing.
        </p>
        <button className=" flex p-4 text-lg ml-20 w-fit mb-6">
          Learn More
        </button>
      </div>
      <div className="flex p-6 justify-center md:w-1/2">
        <img alt="random" src="https://picsum.photos/600/400?random=2" />{" "}
      </div>
    </div>
  );
};

export default Exercises;
