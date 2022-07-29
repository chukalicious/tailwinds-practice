import { trainers } from "../data";
const TrainerCards = () => {
  return (
    <div>
      <h3 className="flex mt-8 ml-15 text-6xl p-4 max-w-fit md:ml-20 md:text-4xl md:font-thin">
        Meet Our Trainers
      </h3>
      <p className="flex w-full justify-center">Lorem ipsum</p>
      {trainers.map((tr, i) => (
        <div key={i} className="flex flex-col w-10/12 mb-8  ">
          <div className="flex flex-col justify-center">
            <img className="rounded-t-3xl " src={tr.url} alt={tr.name} />{" "}
          </div>
          <div className="flex flex-col rounded-b-3xl text-center pb-10 bg-pink-50">
            <h4>{tr.trainerName}</h4>
            <p>Trainer</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainerCards;
