const Exercises = () => {
  return (
    <div id="exercises" className="flex flex-col min-w-full md:flex-row">
      {" "}
      <div className="flex flex-col md:w-1/2 place-content-center">
        <h3 className="flex mt-8 ml-15 text-6xl p-4 max-w-fit md:ml-20 md:text-4xl md:font-thin">
          Exercises
        </h3>
        <p className="flex my-7 mx-auto ml-2 text-justify text-4xl py-2 px-3.5 m:p-4 md:ml-20 md:text-2xl md:p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
          orci nulla pellentesque dignissim. Felis bibendum ut tristique et
          egestas. Cras pulvinar mattis nunc sed blandit libero. Cursus mattis
          molestie a iaculis at erat pellentesque adipiscing.
        </p>
        <button className="flex text-3xl ml-5 w-fit mb-8 mt-4 bg-pink-600 text-white px-7 py-5 rounded-xl md:text-black md:bg-white md:text-2xl md:ml-20 md: md:rounded-none md:p-1 md:my-2 md:underline md:decoration-pink-600 md:decoration-solid md:decoration-2 md:underline-offset-8">
          Learn More
        </button>
      </div>
      <div className="flex w-full mt-4 justify-center md:w-1/2 md:p-8 ">
        <img
          className="mx-1 mb-12 md:rounded-3xl"
          alt="random"
          src="https://picsum.photos/600/400?random=2"
        />{" "}
      </div>
    </div>
  );
};

export default Exercises;
