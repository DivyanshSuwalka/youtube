
const Shimmer = () => {
  return (
      <div className="mx-10 my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6  ">
        {Array(20)
          .fill("")
          .map((card, i) => (
           <div
              className="rounded-lg shadow-md relative w-full aspect-video"
              key={i}
            >
              <h3 className="rounded-lg w-full h-full object-cover bg-gray-200"></h3>
              <br/>
              <h3 className="w-60 p-2 m-2 h-6 bg-gray-200"></h3>
              <h3 className="w-60 p-2 m-2 h-6 bg-gray-200"></h3>
            </div>
          ))}
      </div>
  );
};

export default Shimmer;




/**
 * 
 * <div className="shadow-md bg-gray-100 px-4 py-4">
      <div className="my-2 flex flex-col rounded-lg shadow-lg hover:shadow-xl transition duration-200 cursor-pointer w-full sm:w-[300px] md:w-[340px] lg:w-[360px]">
        {Array(20)
          .fill("")
          .map((card, i) => (
            <div
              className="relative w-full aspect-video"
              key={i}
            >
              <h3 className="rounded-t-lg w-full h-full object-cover bg-gray-200"></h3>
              <br/>
              <h3 className="w-60 p-2 m-2 h-6 bg-gray-200"></h3>
              <h3 className="w-60 p-2 m-2 h-6 bg-gray-200"></h3>
            </div>
          ))}
      </div>
    </div>
 */