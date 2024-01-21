import React from "react";

function CardBase({ children }) {
  return (
    <div className="rounded-lg drop-shadow-md bg-white aspect-square">
      {children}
    </div>
  );
}

export default CardBase;
