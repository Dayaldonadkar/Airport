import React from "react";

const Card1 = () => {
  return (
    <div>
      <div className="shadow-xl px-7 py-5 rounded-xl">
        <h1 className="text-xl">Goa</h1>
        <div className="text-[#0770e3] font-light">
          <ul className="flex space-x-20 text-lg">
            <li>Flights</li>
            <li className="list-disc">Hotels</li>
            <li className="list-disc">Places</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card1;
