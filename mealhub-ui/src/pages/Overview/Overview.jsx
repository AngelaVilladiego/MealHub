import ScheduleWeek from "../../components/ScheduleWeek/ScheduleWeek";
import { React, useState } from "react";
import EditButton from "../../components/Buttons/EditButton";
import CancelButton from "../../components/Buttons/CancelButton";
import SaveButton from "../../components/Buttons/SaveButton";

function Overview() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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

  return (
    <div className="grow flex flex-col w-full gap-3 min-h-full">
      <div className="flex items-center justify-between border-b-2 border-gray-300 pb-2">
        <h1 className="text-3xl text-gray-900 font-header">Overview</h1>
        <span>
          {isEditing ? (
            <span class="inline-flex gap-4">
              <CancelButton onClick={onClickCancel} />
              <SaveButton onClick={onClickSave} />
            </span>
          ) : (
            <EditButton onClick={onClickEdit} />
          )}
        </span>
      </div>
      <ScheduleWeek onAddMeal={onAddMeal} />
    </div>
  );
}

export default Overview;
