import React, { useEffect, useState } from "react";
import xtype from "xtypejs";

const Mid = () => {
  const [details, setdetails] = useState([]);
  const [searchAirport, setSearchAirport] = useState("");
  const [searchFlight, setSearchFlight] = useState("");

  const [show, setshow] = useState(true);
  const [show2, setshow2] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/",
        {
          method: "GET",

          headers: {
            "X-RapidAPI-Key":
              "1b41b5fd71msh6c50515e4fa9219p1c3019jsnd49e5b0ea1e1",
            "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      console.log(xtype(data));
      setdetails(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center bg-[#02122C] text-white py-28">
      <div className="w-7/12 space-y-10">
        <h1 className="text-4xl font-medium">
          Quickly Scan all of your favorite Sites
        </h1>
        <div className="flex text-[#02122C] space-x-8 relative">
          <div className="bg-white px-10 py-4 rounded-lg">
            <h1>Airport</h1>
            <input
              type="text"
              onChange={(event) => setSearchAirport(event.target.value)}
            />
          </div>
          <button
            className="bg-[#0770e3] py-4 px-10 rounded-lg text-white text-lg "
            onClick={() => setshow(!show)}
          >
            Search
          </button>

          <div className="bg-white px-10 py-4 rounded-lg">
            <h1>Flight</h1>

            <input
              className=""
              type="number"
              placeholder="Search Flight number"
              onChange={(e) => setSearchFlight(e.target.value)}
            />
          </div>

          <button
            className="bg-[#0770e3] py-4 px-10 rounded-lg text-white text-lg"
            onClick={() => setshow2(!show2)}
          >
            Search
          </button>
        </div>
        <div className="">
          <div className="w-1/2">
            {!show &&
              details
                .filter((item) => {
                  const { title, userId } = item;

                  if (searchAirport === "") {
                    return null;
                  } else if (
                    title.toLowerCase().includes(searchAirport.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((ite) => {
                  return (
                    <div className="flex" key={ite.id}>
                      <h1 className=" text-red-700">{ite.id}:</h1>
                      <h1>{ite.title}</h1>
                      <h1></h1>
                    </div>
                  );
                })}

            <div className="absolute bottom">
              {!show2 &&
                details
                  .filter((item) => {
                    const { title, id } = item;

                    if (searchFlight === "") {
                      return null;
                    } else if (id == searchFlight) {
                      return item;
                    }
                  })
                  .map((ite) => {
                    return (
                      <div key={ite.id}>
                        <h1>{ite.title}</h1>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
