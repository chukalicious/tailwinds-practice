import { trainers as clients } from "../data";

const Clients = () => {
  return (
    <div>
      <div>
        <h2>Whatv Our Happy Clients Say!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <div>
          {clients.map((client, i) => (
            <div key={i}>
              <img src={client.url} alt="client" /> <h6>{client.name}</h6>{" "}
              <p>{client.title}</p>
              <p>{client.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
