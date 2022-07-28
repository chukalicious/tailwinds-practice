const Exercises = () => {
  return (
    <div id="exercises" className="flex flex-col min-w-full md:flex-row">
      {" "}
      <div className="flex flex-col md:w-1/2 place-content-center">
        <h3 className="flex mt-8 ml-15 text-6xl p-4 max-w-fit ">Exercises</h3>
        <p className="flex my-7 mx-auto ml-2 text-justify text-4xl py-2 px-3.5 m:p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
          orci nulla pellentesque dignissim. Felis bibendum ut tristique et
          egestas. Cras pulvinar mattis nunc sed blandit libero. Cursus mattis
          molestie a iaculis at erat pellentesque adipiscing.
        </p>
        <button className="flex text-3xl ml-5 w-fit mb-8 mt-4 bg-black text-white px-7 py-5 rounded-xl">
          Learn More
        </button>
      </div>
      <div className="flex w-full mt-4 justify-center md:w-1/2">
        <img
          className="mx-1 mb-12"
          alt="random"
          src="https://picsum.photos/600/400?random=2"
        />{" "}
      </div>
    </div>
  );
};

export default Exercises;
