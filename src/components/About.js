const About = () => {
  return (
    <div className="flex flex-col w-full bg-pink-50 ">
      <div className="md:flex ">
        <div className="flex flex-col pt-16 md:justify-between md:order-last md:w-1/2">
          <h3 className="flex  ml-15 text-6xl  max-w-fit md:ml-20 md:text-4xl md:font-thin">
            About Us
          </h3>
          <p className="flex my-7 mx-auto ml-2 text-justify text-3xl py-2 px-3.5 m:p-4 md:ml-20 md:text-2xl md:p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>

          <div className="grid grid-flow-row md:grid-flow-col md:grid-rows-2">
            <div
              className=" bg-pink-600 text-white 
          w-80 mx-auto my-4 rounded-3xl text-2xl py-5 "
            >
              <p className="text-center px-8 py-4 ">300+ Members</p>
            </div>
            <div
              className=" bg-pink-600 text-white w-80  
          mx-auto my-4 rounded-3xl text-2xl py-5 "
            >
              <p className="text-center px-8 py-4 ">100+ Trainers</p>
            </div>
            <div
              className=" bg-pink-600 text-white w-80  
          mx-auto my-4 rounded-3xl text-2xl py-5 "
            >
              <p className="text-center px-8 py-4 ">500+ Programs</p>
            </div>
            <div
              className=" bg-pink-600 text-white w-80  
          mx-auto my-4 rounded-3xl text-2xl py-5 "
            >
              <p className="text-center px-8 py-4 ">150+ Awards</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center my-10 p-2 ">
          <img
            src="https://picsum.photos/550/450?random=6"
            className="rounded-3xl md:mt-8 md:px-4 md:py-3"
            alt="about"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
