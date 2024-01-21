import React from "react";
import CardBase from "../CardBase/CardBase";
import CancelButton from "../Buttons/CancelButton";
import ConfirmButton from "../Buttons/SaveButton";

function AlertPopup({ onConfirm, onCancel }) {
  return (
    <CardBase>
      <div className="flex flex-col items-center gap-8 py-8 px-12 w-full text-center">
        <h1 className="font-bold text-lg font-header">
          Doing this will completely replace your current meal plan with a new
          one.
        </h1>
        <h2>This action cannot be undone.</h2>
        <span className="inline-flex gap-4 items-center">
          <CancelButton onClick={onCancel} />
          <ConfirmButton onClick={onConfirm} />
        </span>
      </div>
    </CardBase>
  );
}

export default AlertPopup;
