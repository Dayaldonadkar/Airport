import React from "react";
import Card1 from "../CityCard.js/Card1";

const Popular = () => {
  return (
    <div className="flex justify-center scroll-py-8">
      <div className="w-7/12">
        <h1 className="font-semibold text-4xl py-10">Popular right now</h1>
        <p>
          Other Travellers are loving these destinations.Search flights, hotels,
          and car hire and join them on the adventure.
        </p>

        <div className="space-y-10">
          <div className="flex space-x-7">
            <Card1 />
            <Card1 />
            <Card1 />
          </div>

          <div className="flex space-x-7">
            <Card1 />
            <Card1 />
            <Card1 />
          </div>

          <div className="flex space-x-7">
            <Card1 />
            <Card1 />
            <Card1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
