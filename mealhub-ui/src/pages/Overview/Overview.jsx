import ScheduleWeek from "../../components/ScheduleWeek/ScheduleWeek";
import { React, useState } from "react";
import EditButton from "../../components/Buttons/EditButton";
import CancelButton from "../../components/Buttons/CancelButton";
import ConfirmButton from "../../components/Buttons/SaveButton";
import AlertPopup from "../../components/AlertPopup/AlertPopup";
import RegenerateButton from "../../components/Buttons/RegenerateButton";
import "./Overview.css";

const TEST_USER_ID = "65aca7dd479d8e3339c67f2e";

function Overview() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmingRegenerate, setIsConfirmingRegenerate] = useState(false);

  const onAddMeal = (weekday) => {
    console.log("adding meal overview on " + weekday);
  };

  const onClickEdit = () => {
    setIsEditing(true);
  };

  const onClickSave = () => {
    setIsEditing(false);
  };

  const onClickCancel = () => {
    setIsEditing(false);
  };

  const onClickRegenerate = () => {
    setIsConfirmingRegenerate(true);
  };

  const onCancelRegenerate = () => {
    setIsConfirmingRegenerate(false);
  };

  const onConfirmRegenerate = () => {
    setIsConfirmingRegenerate(false);
  };

  return (
    <div className="relative grow flex flex-col w-full gap-3 p-8">
      <div className="flex items-center justify-between border-b-2 border-gray-300 pb-2">
        <h1 className="text-3xl text-gray-900 font-header">Overview</h1>
        <span className="inline-flex gap-4">
          {isEditing ? (
            <>
              <CancelButton onClick={onClickCancel} />
              <ConfirmButton onClick={onClickSave} />
            </>
          ) : (
            <>
              <RegenerateButton onClick={onClickRegenerate} />
              <EditButton onClick={onClickEdit} />
            </>
          )}
        </span>
      </div>
      <ScheduleWeek onAddMeal={onAddMeal} />
      {isConfirmingRegenerate && (
        <>
          <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-md bg-black bg-opacity-10">
            <div className="relative w-full h-full">
              <div id="center-me" className="w-4/12">
                <AlertPopup
                  onCancel={onCancelRegenerate}
                  onConfirm={onConfirmRegenerate}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Overview;
