const Exercises = () => {
  return (
    <div id="exercises" className="flex max-w-sm">
      {" "}
      <div className="flex flex-col">
        <h3 className="text-3xl flex">Exercises</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
          orci nulla pellentesque dignissim. Felis bibendum ut tristique et
          egestas. Cras pulvinar mattis nunc sed blandit libero. Cursus mattis
          molestie a iaculis at erat pellentesque adipiscing.
        </p>
        <button>Learn More</button>
      </div>
      <img
        className="flex-row"
        alt="random"
        src="https://picsum.photos/400/400?random=2"
      />{" "}
    </div>
  );
};

export default Exercises;
