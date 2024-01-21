import React from "react";

function ScheduleDay({ dayLabel, children }) {
  return (
    <div className="flex flex-col min-w-32 gap-2">
      <span className="self-center">{dayLabel}</span>
      {children}
    </div>
  );
}

export default ScheduleDay;
