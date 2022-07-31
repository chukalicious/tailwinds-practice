import { trainers } from "../data";
const TrainerCards = () => {
  return (
    <div className="pb-8">
      <h3 className="flex mt-8 ml-15 text-6xl p-4 max-w-fit md:ml-20 md:text-4xl md:font-thin">
        Meet Our Trainers
      </h3>
      <p className="flex w-full justify-center p-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex flex-col md:grid md:grid-cols-3 md:grid-flow-row px-16">
        {trainers.map((tr, i) => (
          <div
            key={i}
            className="flex flex-col w-10/12 mb-8 mx-auto shadow-xl rounded-b-3xl md:grid-cols-3"
          >
            <div className="flex flex-col">
              <img className="rounded-t-3xl " src={tr.url} alt={tr.name} />{" "}
            </div>
            <div className="flex flex-col rounded-b-3xl text-center pb-10 bg-pink-50">
              <h4>{tr.name}</h4>
              <p>Trainer</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerCards;
