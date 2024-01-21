import { React, useState } from "react";
import CardBase from "../CardBase/CardBase";
import {
  StarIcon as StarIconOutlined,
  ClockIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

function RecipeCard({
  id,
  sourceUrl,
  title,
  image,
  readyInMinutes,
  favourited,
}) {
  const [isFavourited, setIsFavourited] = useState(favourited);

  const toggleFavourite = () => {
    //TODO: API request in services
    setIsFavourited(!isFavourited);
  };

  return (
    <CardBase className="max-w-sm">
      <div className="relative h-1/2">
        <img
          src={image}
          alt="recipe image"
          className="w-full h-full object-cover rounded-t-lg"
        />
        <button
          className="absolute top-3 right-3 shadow-md rounded-full bg-white"
          onClick={toggleFavourite}
        >
          <StarIconSolid
            className={`h-8 aspect-square transition duration-150 ease-in p-1 rounded-full hover:fill-yellow-200
              ${isFavourited ? "fill-yellow-400" : "fill-gray-400"}`}
          />
        </button>
      </div>
      <a href={sourceUrl}>
        <div className="p-2 group">
          <h5 className="text-lg text-ellipsis line-clamp-2 font-semibold leading-snug">
            {title}
          </h5>
          <span className="flex items-center p-2">
            <ClockIcon className="size-8 rounded-lg" />
            <span className="ms-3 pt-1">{readyInMinutes} mins</span>
          </span>
          <ArrowTopRightOnSquareIcon className="mt-auto ms-auto me-2 text-gray-700 h-6 aspect-square" />
        </div>
      </a>
    </CardBase>
  );
}

export default RecipeCard;
