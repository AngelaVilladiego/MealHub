import { React, useState } from "react";
import CardBase from "../CardBase/CardBase.jsx";

function RecipeCard({
  id,
  sourceUrl,
  title,
  image,
  readyInMinutes,
  favourited,
}) {
  const [isFavourited, setIsFavourited] = useState(favourited);

  const toggleStar = () => {
    //TODO: API request in services
    setIsFavourited(!isFavourited);
  };

  return (
    <a href={sourceUrl}>
      <CardBase class="max-w-sm group transition transition-all duration-100 hover:border-orange-400 hover:shadow-orange-100">
        <div class="relative">
          <img
            src={image}
            alt="recipe image"
            class="w-full h-48 object-cover rounded-t-lg"
          />
        </div>
      </CardBase>
    </a>
  );
}

export default RecipeCard;
